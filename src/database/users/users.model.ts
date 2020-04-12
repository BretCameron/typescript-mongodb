import * as Mongoose from "mongoose";
import UserSchema from "./users.schema";
import { IUserDocument, IUserModel } from "./users.types";

export const UserModel = Mongoose.model<IUserDocument>(
  "user",
  UserSchema
) as IUserModel;
