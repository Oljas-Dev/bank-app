import { faker, simpleFaker } from "@faker-js/faker";

import userLoan from "../../public/users/loan.png";
import userDepo from "../../public/users/depo.png";
// import user1Pic from "../../public/users/user_1.png";
import user2Pic from "../../public/users/user_2.png";
import user3Pic from "../../public/users/user_3.png";
import { UserData } from "../types/interfaces";
// import user4Pic from "../../public/users/user_4.png";
// import user5Pic from "../../public/users/user_5.png";
// import user6Pic from "../../public/users/user_6.png";
// import user7Pic from "../../public/users/user_7.png";

const user1 = {
  name: "Jerald Hitrow",
  transactions: [
    {
      withdrawal: true,
      amount: -5000,
      sentTo: "Kate Cooper",
      userId: 1002,
      img: user2Pic,
      date: "today",
    },
    {
      withdrawal: true,
      amount: -1000,
      sentTo: "Michael Rogers",
      userId: 1003,
      img: user3Pic,
      date: "31/01/2025",
    },
    {
      withdrawal: false,
      amount: 10000,
      sentTo: "",
      userId: 1100,
      img: userDepo,
      date: "15/01/2025",
      type: "deposit",
    },
    {
      withdrawal: false,
      amount: 10000,
      sentTo: "",
      userId: 1200,
      img: userLoan,
      date: "10/01/2025",
      type: "loan",
    },
  ],
  balance: 18500,
  id: 1001,
};

const users: UserData[] = Array.from({ length: 8 }, () => createRandomUser());

function createRandomUser() {
  const sex = faker.person.sex();
  const name = faker.person.fullName(sex);
  return {
    name: name,
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    transactions: [],
    balance: 10000,
    id: simpleFaker.string.uuid(),
  };
}

export { user1, users };

// type user = {
//   fullName: string;
//   birthDate: string;
//   id: number;
// };

// interface Transactions {
//   type: "withdrawal" | "deposit";
//   id: number;
//   amount?: number;
//   sentTo?: string;
//   img: string;
//   date: string;
// }

// export class User {
//   private fullName: string;
//   private id: number;
//   private birthDate: string;
//   private transactions?: Transactions[];

//   constructor(fullName: string, id: number, birthDate: string) {
//     this.fullName = fullName;
//     this.id = id;
//     this.birthDate = birthDate;
//   }

//   handleUser(name: string, userId: number, birth: string) {
//     const user = {
//       fullName: name,
//       birthDate: birth,
//       id: userId,
//     };

//     this.birthDate = birth;
//   }

//   addTransaction(transaction: Transactions) {
//     this.transactions?.push(transaction);
//   }
// }

// const jeraldHitrow = new User("Jerald Hitrow", 1001, "28.05.1986");

// export default function UserObjects() {}
