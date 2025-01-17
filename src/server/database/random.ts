import Platform from "./models/platform";
import Post from "./models/post";
import Tag from "./models/tag";
import User from "./models/user";

export async function randomUser(count: number = -1) {
  return await User.find()
    .limit(count)
    .skip(Math.floor(Math.random() * (await User.countDocuments().exec())))
    .exec();
}

export async function randomTag(count: number = -1) {
  return await Tag.find()
    .limit(count)
    .skip(Math.floor(Math.random() * (await Tag.countDocuments().exec())))
    .exec();
}

export async function randomPost(count: number = -1) {
  return await Post.find()
    .limit(count)
    .skip(Math.floor(Math.random() * (await Post.countDocuments().exec())))
    .exec();
}

export async function randomPlatform(count: number = -1) {
  return await Platform.find()
    .limit(count)
    .skip(Math.floor(Math.random() * (await Platform.countDocuments().exec())))
    .exec();
}
