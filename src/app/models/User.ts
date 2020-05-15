import { db } from "../../database/database.ts";

export class UserSchema {
  name: string;
  age: number;

  created_at?: Date = new Date();
  updated_at?: Date = new Date();

  public constructor(name: string, age: number, updated_at?: Date) {
    this.name = name;
    this.age = age;
    this.updated_at = updated_at;
  }
}

export const User = db.collection("users");
