import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

type Cache = {
  connection?: typeof mongoose;
  promise?: Promise<typeof mongoose>;
};

const cached: Cache = {};

export default async function connectDB() {
  if (!MONGO_URI) {
    throw new Error(
      "Please define the MONGO_URI environment variable inside .env"
    );
  }

  if (cached.connection) {
    return cached.connection;
  }

  if (!cached.promise) {
    const options = {
      bufferCommands: false,
    };

    cached.promise = mongoose.connect(MONGO_URI, options);
  }

  try {
    cached.connection = await cached.promise;
  } catch (error) {
    console.log(error);

    cached.promise = undefined;
    throw new Error("Error connecting to database");
  }

  return cached.connection;
}
