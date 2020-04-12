import * as Mongoose from "mongoose";
import { UserModel } from "./users/users.model";

let database: Mongoose.Connection;

export const connect = () => {
  const uri =
    "mongodb+srv://test:test@cluster0-v6q0g.mongodb.net/test?retryWrites=true&w=majority";

  if (database) {
    return;
  }

  Mongoose.connect(uri, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });

  database = Mongoose.connection;

  database.once("open", async () => {
    console.log("Connected to database");
  });

  database.on("error", () => {
    console.log("Error connecting to database");
  });

  return {
    UserModel,
  };
};

export const disconnect = () => {
  if (!database) {
    return;
  }

  Mongoose.disconnect();
};
