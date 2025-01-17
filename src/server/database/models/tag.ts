import { model, models, Schema } from "mongoose";

export interface ITag {
  name: string;
  used: number;
}

const tagSchema = new Schema<ITag>({
  name: { type: String, required: true },
  used: { type: Number, required: true, default: 0 },
});

const Tag = models.Tag || model<ITag>("Tag", tagSchema);

export default Tag;
