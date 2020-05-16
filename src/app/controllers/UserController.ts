import { RouterContext, isHttpError } from "https://deno.land/x/oak/mod.ts";
import { ObjectId } from "https://deno.land/x/mongo/mod.ts";

import { User, UserSchema } from "../models/User.ts";

class UserController {
  public async index({ request, response }: RouterContext): Promise<void> {
    const users = await User.find();

    response.body = { users };
  }

  public async store({ request, response }: RouterContext): Promise<void> {
    const { value } = await request.body();
    const { name, age } = value;

    const user = new UserSchema(name, age);

    const create = await User.insertOne(user);

    response.body = { create };
  }

  public async update({
    request,
    response,
    params,
  }: RouterContext): Promise<void> {
    const { id } = params;

    if (!id) return;

    const _id = ObjectId(id);

    await User.findOne({ _id });

    const { value } = await request.body();
    const { name, age } = value;

    await User.updateOne(
      { name: { $ne: null }, age: { $ne: null } },
      { $set: { name, age } },
    );

    response.body = { message: "User updated" };
  }

  public async delete({
    request,
    response,
    params,
  }: RouterContext): Promise<void> {
    const { id } = params;

    if (!id) return;

    const _id = ObjectId(id);

    await User.deleteOne({ _id });

    response.body = { message: "User deleted" };
  }
}

export default new UserController();
