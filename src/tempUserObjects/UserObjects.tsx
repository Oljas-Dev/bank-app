import { faker, simpleFaker } from "@faker-js/faker";
import { UserData } from "../types/interfaces";

const users: UserData[] = Array.from({ length: 8 }, () => createRandomUser());

function createRandomUser() {
  // const sex = faker.person.sex();
  const name = faker.person.fullName();
  return {
    name: name,
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    transactions: [],
    balance: 10000,
    id: simpleFaker.string.uuid(),
  };
}

export { users };
