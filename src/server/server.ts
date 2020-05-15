import { config } from "https://deno.land/x/dotenv/mod.ts";

import app from "./app.ts";

const { PORT, HOST } = config();

await app.listen(`${HOST}:${PORT}`);
