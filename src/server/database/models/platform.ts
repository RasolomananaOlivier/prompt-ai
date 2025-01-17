import { model, models, Schema } from "mongoose";

export interface IPlatform {
  name: string;
}

const platformSchema = new Schema<IPlatform>({
  name: { type: String, required: true },
});

const Platform =
  models.Platform || model<IPlatform>("Platform", platformSchema);

export default Platform;
