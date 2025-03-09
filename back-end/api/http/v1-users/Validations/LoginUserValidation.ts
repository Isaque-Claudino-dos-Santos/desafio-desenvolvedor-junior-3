import { body } from "express-validator";

export default class LoginUserValidation {
  validate() {
    return [
      body("email").isEmail().notEmpty(),
      body("password").isString().notEmpty(),
    ];
  }
}
