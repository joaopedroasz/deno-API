import { db } from "../../database/database.ts";

export interface UserSchema {
  name: string;
  age: number;
}

export const User = db.collection("users");
