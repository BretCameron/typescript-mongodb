import { UserModel } from "../database/users/users.model";
import { connect, disconnect } from "../database/database";

(async () => {
  connect();

  const users = [
    { firstName: "Emma", lastName: "Bradley", age: 34 },
    { firstName: "Elise", lastName: "Conner", age: 62 },
    { firstName: "Jack", lastName: "Lawson", age: 20 },
    { firstName: "Oliver", lastName: "Moss", age: 80 },
    { firstName: "Jamie", lastName: "Reid", age: 52 },
    { firstName: "Aidan", lastName: "Bradley", age: 73 },
    { firstName: "Jordan", lastName: "Gallagher", age: 27 },
    { firstName: "Erin", lastName: "Miles", age: 23 },
    { firstName: "William", lastName: "May", age: 39 },
    { firstName: "Ethan", lastName: "Butler", age: 68 },
  ];

  try {
    for (const user of users) {
      await UserModel.create(user);
      console.log(`Created user ${user.firstName} ${user.lastName}`);
    }

    disconnect();
  } catch (e) {
    console.log(e);
  }
})();
