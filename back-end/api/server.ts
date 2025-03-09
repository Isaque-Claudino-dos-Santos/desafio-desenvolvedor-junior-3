import ENV from "@constants/env";
import express from "express";
import v1Router from "./routers/v1-router";
import { tget } from "@constants/translations-data";

const app = express();

app.use(express.json());
app.use("/v1", v1Router);

app.listen(ENV.APP_PORT, ENV.APP_HOST, () => {
  const message = tget("OPENED_HOST", [
    `http://${ENV.APP_HOST}:${ENV.APP_PORT}`,
  ]);

  console.log(message);
});
