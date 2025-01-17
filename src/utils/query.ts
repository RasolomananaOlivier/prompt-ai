import Platform from "@/server/database/models/platform";
import Post, { IPost } from "@/server/database/models/post";
import Tag from "@/server/database/models/tag";
import { FilterQuery } from "mongoose";
import { NextRequest } from "next/server";

export async function getPostQuery(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const tagQuery = searchParams.get("tags");
  const platformQuery = searchParams.get("platforms");

  const tagNames = tagQuery?.split(",") || [];
  const platformNames = platformQuery?.split(",") || [];

  const searchTerm = searchParams.get("query");

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
