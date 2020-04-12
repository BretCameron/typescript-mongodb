import { Document } from "mongoose";
import { IUserDocument } from "./users.types";

export async function setLastUpdated(this: IUserDocument): Promise<void> {
  const now = new Date();
  if (!this.lastUpdated || this.lastUpdated < now) {
    this.lastUpdated = now;
    await this.save();
  }
}
export async function sameLastName(this: IUserDocument): Promise<Document[]> {
  return this.model("user").find({ lastName: this.lastName });
}
