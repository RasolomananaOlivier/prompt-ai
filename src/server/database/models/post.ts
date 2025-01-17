import { model, models, Schema, Types } from "mongoose";

export interface IPost {
  prompt?: string;
  url?: string;
  platforms: Types.ObjectId[];
  author: Types.ObjectId;
  views: number;
  tags: Types.ObjectId[];
  createdAt: Date;
  updatedAt: Date;
}

const postSchema = new Schema<IPost>(
  {
    prompt: { type: String, required: false },
    url: { type: String, required: false },
    views: { type: Number, default: 0 },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    platforms: [
      {
        type: Schema.Types.ObjectId,
        ref: "Platform",
        required: true,
      },
    ],
    tags: [
      {
        type: Schema.Types.ObjectId,
        ref: "Tag",
        required: true,
      },
    ],
  },
  {
    timestamps: true,
  }
);

postSchema.virtual("comments", {
  ref: "Comment",
  localField: "_id",
  foreignField: "post",
});

const Post = models.Post || model<IPost>("Post", postSchema);

export default Post;
