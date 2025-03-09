import ENV from "@constants/env";
import { tget } from "@constants/translations-data";
import { Express, json } from "express";
import v1Router from "../routers/v1-router";

export default class AppServer {
  constructor(private readonly app: Express) {}

  listen() {
    this.app.use(json());
    this.app.use("/v1", v1Router);

    this.app.listen(ENV.APP_PORT, ENV.APP_HOST, () => {
      const message = tget("OPENED_HOST", [
        `http://${ENV.APP_HOST}:${ENV.APP_PORT}`,
      ]);

      console.log(message);
    });
  }
}
