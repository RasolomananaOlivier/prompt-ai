import connectDB from "@/server/database/database";
import Tag from "@/server/database/models/tag";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const page = Number(request.nextUrl.searchParams.get("page")) || 1;
    const perPage = Number(request.nextUrl.searchParams.get("perPage")) || 10;

    const tags = await Tag.find()
      .select("name used")
      .sort({ used: "desc" })
      .limit(perPage)
      .skip((page - 1) * perPage)
      .exec();

    return Response.json({
      status: "success",
      message: "Tags retrieved",
      data: tags,
    });
  } catch (error) {
    return Response.json({
      status: "error",
      message: error,
      data: null,
    });
  }
}
