import { NextFunction, Request, Response } from "express";
import { body, matchedData } from "express-validator";
import UserRepository from "../Repositories/UserRepository";

type ValidationOptions = {
  data: Record<string, any>;
  req: Request;
};

export default class RegisterUserValidation {
  constructor(private readonly userRepository: UserRepository) {}

  private async validateUserEmailIsUnique(options: ValidationOptions) {
    const { email } = options.data;
    const user = await this.userRepository.getByEmail(email);

    if (user) {
      await body("email")
        .not()
        .equals(user.email)
        .withMessage("email already binded")
        .run(options.req);
    }
  }

  private async validationPasswordEqualsOfConfirmation(
    options: ValidationOptions
  ) {
    const { password, confirmationPassword } = options.data;
    if (password === confirmationPassword) {
      return;
    }

    await body("password")
      .equals(confirmationPassword)
      .withMessage("required confirmation password equal to password")
      .run(options.req);
  }

  private handler = async (req: Request, _: Response, next: NextFunction) => {
    const data = matchedData(req);

    await this.validateUserEmailIsUnique({ data, req });
    await this.validationPasswordEqualsOfConfirmation({ data, req });

    next();
  };

  public validate() {
    return [
      body("name").isString().notEmpty(),
      body("email").isEmail().notEmpty(),
      body("password").isString().notEmpty(),
      body("confirmationPassword").isString().notEmpty(),
      this.handler,
    ];
  }
}
