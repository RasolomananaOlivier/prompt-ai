import connectDB from "@/server/database/database";
import Like from "@/server/database/models/like";
import { ObjectId } from "mongodb";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const likes = await Like.find({
      post: request.nextUrl.searchParams.get("post"),
    }).countDocuments();

    return Response.json({
      status: "success",
      message: "Likes retrieved",
      data: likes,
    });
  } catch (error) {
    return Response.json({
      status: "error",
      message: error,
      data: null,
    });
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();

    const body = await request.json();

    const existingLike = await Like.findOne({
      user: body.user,
      post: body.post,
    });

    if (existingLike) {
      await Like.findByIdAndDelete(existingLike._id);
    } else {
      await Like.create({
        post: body.post,
        user: body.user,
      });
    }

    return Response.json({
      status: "success",
      message: "Likes updated",
    });
  } catch (error) {
    return Response.json({
      status: "error",
      message: error,
      data: null,
    });
  }
}
