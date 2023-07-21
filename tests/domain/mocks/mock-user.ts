import { CreateUser } from "../use-cases";

import { faker } from "@faker-js/faker";

export const mockCreateUserParams = (): CreateUser.Params => ({
  email: faker.internet.email(),
  name: faker.name.toString(),
  password: "12345678password",
});
