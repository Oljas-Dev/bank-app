// import { faker, simpleFaker } from "@faker-js/faker";
// import { UserData } from "../types/interfaces";
import user1Pic from "../../public/users/user_1.png";
import user2Pic from "../../public/users/user_2.png";
import user3Pic from "../../public/users/user_3.png";
import user4Pic from "../../public/users/user_4.png";
import user5Pic from "../../public/users/user_5.png";
import user6Pic from "../../public/users/user_6.png";
import user7Pic from "../../public/users/user_7.png";
import { UserData } from "../types/interfaces";

// const users: UserData[] = Array.from({ length: 8 }, () => createRandomUser());

// function createRandomUser() {
//   // const sex = faker.person.sex();
//   const name = faker.person.fullName();
//   return {
//     name: name,
//     email: faker.internet.email(),
//     avatar: faker.image.avatar(),
//     transactions: [],
//     id: simpleFaker.string.uuid(),
//   };
// }

const user1 = {
  name: "Jerald Hitrow",
  email: "jerald@test.com",
  avatar: user1Pic,
  transactions: [],
  id: "1001",
  password: "1111",
};

const user2 = {
  name: "Courtney Schmidt",
  email: "schmidt@test.com",
  avatar: user2Pic,
  transactions: [],
  id: "c173ec24",
  password: "1111",
};
const user3 = {
  name: "Bonnie Bartel",
  email: "bonnie@test.com",
  avatar: user3Pic,
  transactions: [],
  id: "750434b1",
  password: "1111",
};
const user4 = {
  name: "Kristy Kuhic",
  email: "kristy@test.com",
  avatar: user4Pic,
  transactions: [],
  id: "5a4f7460",
  password: "1111",
};
const user5 = {
  name: "Elvira Pacocha",
  email: "elvira@test.com",
  avatar: user5Pic,
  transactions: [],
  id: "ad4c8d4e",
  password: "1111",
};
const user6 = {
  name: "Willis Ledner",
  email: "willis@test.com",
  avatar: user6Pic,
  transactions: [],
  id: "2d72439b",
  password: "1111",
};
const user7 = {
  name: "Phillip Cummings",
  email: "phillip@test.com",
  avatar: user7Pic,
  transactions: [],
  id: "9b62a064",
  password: "1111",
};

const users: UserData[] = [user1, user2, user3, user4, user5, user6, user7];

export { users };
