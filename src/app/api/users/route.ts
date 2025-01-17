import connectDB from "@/server/database/database";
import Post from "@/server/database/models/post";
import User from "@/server/database/models/user";

export async function GET(request: Request) {
  try {
    await connectDB();

    const users = await User.find()
      .populate({
        path: "posts",
        model: Post,
      })
      .exec();

    return Response.json({
      status: "success",
      message: "Users retrieved",
      data: users,
    });
  } catch (error) {
    console.log(error);

    return Response.json({
      status: "error",
      message: error,
      data: null,
    });
  }
}
