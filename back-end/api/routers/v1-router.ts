import { tget } from "@constants/translations-data";
import { Router } from "express";

const v1Router = Router();

v1Router.get("/up", (_, res) => {
  res.send(`<h2>${tget("APP_LIFE_OK")}</h2>`);
});


export default v1Router;
