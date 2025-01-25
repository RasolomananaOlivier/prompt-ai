import Post from "../models/post";
import User from "../models/user";
import { faker } from "@faker-js/faker";
import { randomPlatform, randomTag, randomUser } from "../random";
import Tag from "../models/tag";

export async function postSeeder(count: number) {
  console.log("Seeding posts");

  const posts = [];
  for (let i = 0; i < count; i++) {
    const post = {
      title: faker.lorem.words(6),
      prompt: faker.lorem.sentence(),
      author: (await randomUser())[0]._id,
      platforms: (await randomPlatform(3)).map((platform) => platform._id),
      tags: (await randomTag(5)).map((tag) => tag._id),
    };

    for (const tagId of post.tags) {
      await Tag.findByIdAndUpdate(tagId, { $inc: { used: 1 } });
    }

    posts.push(post);
  }

  await Post.deleteMany({});

  await Post.create(posts);

  console.log("posts seeded");
}
