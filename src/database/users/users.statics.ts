import { IUserDocument, IUserModel } from "./users.types";

export async function findOneOrCreate(
  this: IUserModel,
  {
    firstName,
    lastName,
    age,
  }: { firstName: string; lastName: string; age: number }
): Promise<IUserDocument> {
  const record = await this.findOne({ firstName, lastName, age });
  if (record) {
    return record;
  } else {
    return this.create({ firstName, lastName, age });
  }
}

export async function findByAge(
  this: IUserModel,
  min?: number,
  max?: number
): Promise<IUserDocument[]> {
  return this.find({ age: { $gte: min || 0, $lte: max || Infinity } });
}
