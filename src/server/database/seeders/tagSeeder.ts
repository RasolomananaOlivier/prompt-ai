import Tag from "../models/tag";
import { faker } from "@faker-js/faker";

export async function tagSeeder(count: number) {
  console.log("Seeding tags");

  const tags = [];
  for (let i = 0; i < count; i++) {
    tags.push({
      // random words
      name: faker.word.noun(),
    });
  }

  await Tag.deleteMany({});

  await Tag.create(tags);

  console.log("tags seeded");
}
