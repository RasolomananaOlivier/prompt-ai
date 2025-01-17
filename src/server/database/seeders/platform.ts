import Platform from "../models/platform";
import User from "../models/user";
import { faker } from "@faker-js/faker";

export async function platformSeeder(count: number) {
  console.log("Seeding platforms");

  const platforms = [];
  for (let i = 0; i < count; i++) {
    platforms.push({
      name: faker.word.sample(),
    });
  }

  await Platform.deleteMany({});

  await Platform.create(platforms);

  console.log("platforms seeded");
}
