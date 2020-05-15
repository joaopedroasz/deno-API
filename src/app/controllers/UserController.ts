import { Context } from "https://deno.land/x/oak/mod.ts";

import { User, UserSchema } from "../models/User.ts";

class UserController {
  public async store({ request, response }: Context) {
    const { value } = await request.body();
    const { name, age } = value;

    const user = new UserSchema(name, age);

    await User.insertOne(user);

    response.body = {
      value,
    };
  }
}

export default new UserController();
