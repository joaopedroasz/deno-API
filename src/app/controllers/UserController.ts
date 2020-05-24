import { RouterContext } from "https://deno.land/x/oak/mod.ts";
import { ObjectId } from "https://deno.land/x/mongo/mod.ts";

import { User, UserSchema } from "../models/User.ts";

class UserController {
  public async index({ request, response }: RouterContext): Promise<void> {
    const users: UserSchema[] = await User.find();

    response.body = { users };
  }

  public async store({ request, response }: RouterContext): Promise<void> {
    const { value } = await request.body();
    const { name, age } = value;

    const user: UserSchema = { name, age };

    const newUser = await User.insertOne(user);

    response.body = { newUser };
  }

  public async show({
    request,
    response,
    params,
  }: RouterContext): Promise<void> {
    const { id } = params;

    if (!id) return;

    const _id = ObjectId(id);

    const user: UserSchema = await User.findOne({ _id });

    response.body = { user };
  }

  public async update({
    request,
    response,
    params,
  }: RouterContext): Promise<void> {
    const { id } = params;

    if (!id) return;

    const _id = ObjectId(id);

    const { value } = await request.body();
    const { name, age } = value;

    await User.updateOne({ _id }, { $set: { name, age } });

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
