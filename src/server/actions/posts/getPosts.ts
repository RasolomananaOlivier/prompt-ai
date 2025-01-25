import connectDB from "@/server/database/database";
import Platform from "@/server/database/models/platform";
import Post, { IPost } from "@/server/database/models/post";
import Tag from "@/server/database/models/tag";
import User from "@/server/database/models/user";
import { FilterQuery } from "mongoose";

type PostParams = {
  query?: string;
  platforms?: string[];
  tags?: string[];
};

async function getPostQuery(params: PostParams) {
  const tagNames = params.tags || [];
  const platformNames = params.platforms || [];

  const searchTerm = params.query;

  const tagIds = (await Tag.find({ name: { $in: tagNames } })).map(
    (tag) => tag._id
  );

  const platformIds = (
    await Platform.find({ name: { $in: platformNames } })
  ).map((platform) => platform._id);

  const query: FilterQuery<IPost> = {};

  if (tagIds.length > 0) {
    query["tags"] = {
      $in: tagIds,
    };
  }

  if (platformIds.length > 0) {
    query["platforms"] = {
      $in: platformIds,
    };
  }

  if (searchTerm && searchTerm !== "") {
    query["prompt"] = {
      $regex: searchTerm,
      $options: "i",
    };
  }

  return query;
}

export async function getPost(
  params: PostParams
): Promise<IResponse<any | null>> {
  try {
    await connectDB();

    const query = await getPostQuery(params);

    const posts = await Post.find(query)
      .populate("tags", "name", Tag)
      .populate("platforms", "name", Platform)
      .populate("author", "name email", User)
      .exec();

    return {
      status: "success",
      message: "Post retrieved",
      data: posts,
    };
  } catch (error) {
    return {
      status: "error",
      message: "Error getting post",
      data: null,
    };
  }
}
