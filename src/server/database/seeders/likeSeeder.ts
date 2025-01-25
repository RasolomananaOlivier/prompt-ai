import Post from "../models/post";
import { faker } from "@faker-js/faker";
import User from "../models/user";
import Like from "../models/like";

export async function likeSeeder() {
  console.log("Seeding likes");

  await Post.updateMany({}, { likes: 0 });
  await Like.deleteMany();

  const posts = await Post.find();
  for (let post of posts) {
    const randomLikes = faker.number.int(100);

    await Post.updateOne({ _id: post._id }, { likes: randomLikes });

    const users = await User.find().limit(randomLikes);

    for (let user of users) {
      await Like.create({ user: user._id, post: post._id });
    }
  }

  console.log("likes seeded");
}
