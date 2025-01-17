import User from "../models/user";
import { faker } from "@faker-js/faker";

export async function userSeeder(count: number) {
  console.log("Seeding users");

  const users = [];
  for (let i = 0; i < count; i++) {
    users.push({
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
    });
  }

  await User.deleteMany({});

  await User.create(users);

  console.log("Users seeded");
}
