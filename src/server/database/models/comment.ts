import { model, models, Schema, Types } from "mongoose";

export interface IComment {
  text: string;
  post: Types.ObjectId;
  user: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const commentSchema = new Schema<IComment>(
  {
    text: { type: String, required: true },
    post: { type: Schema.Types.ObjectId, ref: "Post", required: true },
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  {
    timestamps: true,
  }
);

const Comment = models.Comment || model<IComment>("Comment", commentSchema);

export default Comment;
