import { connect, disconnect } from "../database/database";

(async () => {
  const db = connect();

  // test static methods
  const twenties = await db.UserModel.findByAge(20, 29);
  const newUser = await db.UserModel.findOneOrCreate({
    firstName: "Mike",
    lastName: "Smith",
    age: 57,
  });
  const existingUser = await db.UserModel.findOneOrCreate({
    firstName: "Emma",
    lastName: "Bradley",
    age: 34,
  });
  const numOfUsers = (await db.UserModel.find()).length;
  console.log({ twenties, newUser, existingUser, numOfUsers });

  // test instance methods
  await existingUser.setLastUpdated();
  const siblings = await existingUser.sameLastName();
  console.log({ siblings });

  disconnect();
})();
