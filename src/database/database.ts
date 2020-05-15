import { init, MongoClient } from "https://deno.land/x/mongo/mod.ts";

const client = new MongoClient();

export async function databaseConfig(): Promise<void> {
  await init();

  client.connectWithUri("mongodb://localhost:27017/denoAPI");
}

export const db = client.database("denoAPI");
