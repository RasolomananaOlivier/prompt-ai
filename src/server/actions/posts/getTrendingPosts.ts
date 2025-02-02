import connectDB from "@/server/database/database";
import Like from "@/server/database/models/like";
import Platform from "@/server/database/models/platform";
import Post, { PostEntity } from "@/server/database/models/post";
import Tag from "@/server/database/models/tag";
import User from "@/server/database/models/user";

export async function getTrendingPosts(): Promise<
  IResponse<PostEntity[] | null>
> {
  try {
    await connectDB();

    let trendingPosts = await Like.aggregate([
      {
        $group: {
          _id: "$post",
          likeCount: { $sum: 1 },
        },
      },
      {
        $sort: { likeCount: -1 },
      },
      {
        $limit: 10,
      },
      {
        $lookup: {
          from: "posts",
          localField: "_id",
          foreignField: "_id",
          as: "post",
        },
      },
      {
        $unwind: "$post",
      },
      {
        $lookup: {
          from: "tags",
          localField: "post.tags",
          foreignField: "_id",
          as: "post.tags",
        },
      },
      {
        $lookup: {
          from: "platforms",
          localField: "post.platforms",
          foreignField: "_id",
          as: "post.platforms",
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "post.author",
          foreignField: "_id",
          as: "post.author",
        },
      },
      {
        $unwind: "$post.author",
      },
      {
        $project: {
          _id: 0,
          post: 1,
          likeCount: 1,
        },
      },
    ]);

    if (trendingPosts.length === 0) {
      trendingPosts = await Post.find()
        .sort({ createdAt: "desc" })
        .limit(10)
        .populate("tags", "name", Tag)
        .populate("platforms", "name", Platform)
        .populate("author", "name email", User)
        .exec();
    } else {
      trendingPosts = trendingPosts.map((item) => item.post);
    }

    return {
      status: "success",
      message: "Posts fetched",
      data: trendingPosts,
    };
  } catch (error) {
    return {
      status: "error",
      message: `Error getting posts ${error}`,
      data: null,
    };
  }
}
