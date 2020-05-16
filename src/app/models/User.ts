import { db } from "../../database/database.ts";

export class UserSchema {
  name: string;
  age: number;

  public constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

export const User = db.collection("users");
