import { tget } from "@constants/translations-data";
import { Router } from "express";
import V1UserController from "../http/v1-users/V1UserController";
import ResponseService from "../Services/ResponseService";
import prisma from "@constants/prisma-client";
import UserRepository from "../http/v1-users/Repositories/UserRepository";
import RegisterUserValidation from "../http/v1-users/Validations/RegisterUserValidation";
import LoginUserValidation from "../http/v1-users/Validations/LoginUserValidation";

const v1Router = Router();

const userRepository = new UserRepository(prisma);
const userController = new V1UserController(
  new ResponseService(),
  userRepository
);

v1Router.get("/up", (_, res) => {
  res.send(`<h2>${tget("APP_LIFE_OK")}</h2>`);
});

v1Router.post(
  "/register",
  new RegisterUserValidation(userRepository).validate(),
  userController.registerUser
);

v1Router.post(
  "/login",
  new LoginUserValidation().validate(),
  userController.loginUser
);

export default v1Router;
