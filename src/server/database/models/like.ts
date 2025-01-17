import { model, models, Schema, Types } from "mongoose";

export interface ILike {
  user: Types.ObjectId;
  post: Types.ObjectId;
}

const likeSchema = new Schema<ILike>({
  user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  post: { type: Schema.Types.ObjectId, ref: "Post", required: true },
});

const Like = models.Like || model<ILike>("Like", likeSchema);

export default Like;
