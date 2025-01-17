import connectDB from "../database";
import { platformSeeder } from "./platform";
import { postSeeder } from "./postSeeder";
import { tagSeeder } from "./tagSeeder";
import { userSeeder } from "./userSeeder";

async function executeSeeders() {
  try {
    await connectDB();

    await userSeeder(10);
    await tagSeeder(10);
    await platformSeeder(5);
    await postSeeder(10);
  } catch (error) {
    console.log(error);
  }
}

executeSeeders().then(() => {
  process.exit();
});
