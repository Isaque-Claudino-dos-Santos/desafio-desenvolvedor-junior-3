import { env } from "node:process";

const ENV = Object.freeze({
  APP_PORT: Number(env.APP_PORT) ?? 8000,
  APP_HOST: env.APP_HOST ?? "localhost",
  APP_LOCATION: (env.APP_LOCATION ?? "pt") as "pt" | "us" | "en",
});

export default ENV;
