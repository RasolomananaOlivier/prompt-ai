import connectDB from "../database";
import { likeSeeder } from "./likeSeeder";
import { platformSeeder } from "./platform";
import { postSeeder } from "./postSeeder";
import { tagSeeder } from "./tagSeeder";
import { userSeeder } from "./userSeeder";

async function executeSeeders() {
  try {
    await connectDB();

    await userSeeder(100);
    await tagSeeder(10);
    await platformSeeder(5);
    await postSeeder(10);
    await likeSeeder();
  } catch (error) {
    console.log(error);
  }
}

executeSeeders().then(() => {
  process.exit();
});
