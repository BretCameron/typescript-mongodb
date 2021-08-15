import { IUserDocument } from "./users.types";

export async function findOneOrCreate({
  firstName,
  lastName,
  age,
}: {
  firstName: string;
  lastName: string;
  age: number;
}) {
  const record = await this.findOne({ firstName, lastName, age });
  if (record) {
    return record;
  } else {
    return this.create({ firstName, lastName, age });
  }
}

export async function findByAge(
  min?: number,
  max?: number
): Promise<IUserDocument[]> {
  return this.find({ age: { $gte: min || 0, $lte: max || Infinity } });
}
