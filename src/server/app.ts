import { Application } from "https://deno.land/x/oak/mod.ts";

import routes from "./routes.ts";
import { databaseConfig } from "../database/database.ts";

class App {
  public app: Application;

  public constructor() {
    this.app = new Application();

    this.routes();
    this.database();
  }

  private routes(): void {
    this.app.use(routes.routes());
  }

  private async database(): Promise<void> {
    await databaseConfig();
  }
}

export default new App().app;
