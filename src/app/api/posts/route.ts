import connectDB from "@/server/database/database";
import Platform from "@/server/database/models/platform";
import Post from "@/server/database/models/post";
import Tag from "@/server/database/models/tag";
import User from "@/server/database/models/user";
import { getPostQuery } from "@/utils/query";
import { NextRequest } from "next/server";
import { z } from "zod";

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const query = await getPostQuery(request);

    const posts = await Post.find(query)
      .populate("tags", "name", Tag)
      .populate("platforms", "name", Platform)
      .populate("author", "name email", User)
      .exec();

    return Response.json({
      status: "success",
      message: "Post retrieved",
      data: posts,
    });
  } catch (error) {
    console.log(error);

    return Response.json(
      {
        status: "error",
        message: error,
        data: null,
      },
      { status: 500 }
    );
  }
}

const postSchema = z.object({
  prompt: z.string().optional(),
  url: z.string().optional(),
  platforms: z.array(z.string()),
  tags: z.array(z.string()),

  // To remove later
  author: z.string(),
});

export async function POST(request: Request) {
  try {
    await connectDB();

    const validationResult = postSchema.safeParse(await request.json());

    if (!validationResult.success) {
      return Response.json(
        {
          status: "error",
          message: validationResult.error,
          data: null,
        },
        { status: 400 }
      );
    }

    // Validate if each platform exists
    const platforms = validationResult.data.platforms;
    for (const platformId of platforms) {
      const platform = await Platform.findById(platformId);

      if (!platform) {
        return Response.json(
          {
            status: "error",
            message: `Platform with id ${platformId} does not exist`,
            data: null,
          },
          { status: 404 }
        );
      }
    }

    const tagIds: string[] = [];

    const tagNames = validationResult.data.tags;
    for (const tagName of tagNames) {
      const tag = await Tag.findOne({ name: tagName });

      if (tag) {
        tag.used = tag.used + 1;
        await tag.save();

        tagIds.push(tag._id);
      } else {
        const newTag = await Tag.create({ name: tagName, used: 1 });
        tagIds.push(newTag._id);
      }
    }

    const post = await Post.create({
      ...validationResult.data,
      tags: tagIds,
    });

    return Response.json({
      status: "success",
      message: "Post created",
      data: post,
    });
  } catch (error: any) {
    console.log(error);

    return Response.json({
      status: "error",
      message: error.message,
      data: null,
    });
  }
}

export async function PUT(request: Request) {
  try {
    await connectDB();

    // TODO: handle server side validation

    const body = await request.json();

    const tagNames = body.tags;

    const tagIds: string[] = [];

    for (const tagName of tagNames) {
      const tag = await Tag.findOne({ name: tagName });

      if (tag) {
        tagIds.push(tag._id);
      } else {
        const newTag = await Tag.create({ name: tagName });
        tagIds.push(newTag._id);
      }
    }

    const post = await Post.findByIdAndUpdate(body.id, body);

    return Response.json({
      status: "success",
      message: "Post updated",
      data: post,
    });
  } catch (error) {
    return Response.json({
      status: "error",
      message: error,
      data: null,
    });
  }
}

export async function DELETE(request: Request) {
  // TODO: handle delete post
}
