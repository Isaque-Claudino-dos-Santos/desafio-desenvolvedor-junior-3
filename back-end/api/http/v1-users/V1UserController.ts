import { Request, Response } from "express";
import { validationResult } from "express-validator";
import ResponseService from "../../Services/ResponseService";
import RegisterUserDTO from "./DTOs/RegisterUserDTO";
import UserRepository from "./Repositories/UserRepository";
import LoginUserDTO from "./DTOs/LoginUserDTO";

export default class V1UserController {
  constructor(
    public readonly responseService: ResponseService,
    public readonly userRepository: UserRepository
  ) {}

  registerUser = async (req: Request, res: Response) => {
    const validation = validationResult(req);
    const dto = RegisterUserDTO.fromReq(req.body);

    if (!validation.isEmpty()) {
      this.responseService.unprocessableEntity(validation.mapped(), res);
      return;
    }

    await this.userRepository.create(dto);

    this.responseService.created(dto, res);
  };

  loginUser = async (req: Request, res: Response) => {
    const validation = validationResult(req);
    const dto = LoginUserDTO.fromReq(req.body);

    if (!validation.isEmpty()) {
      this.responseService.unprocessableEntity(validation.mapped(), res);
      return;
    }

    const user = await this.userRepository.getUserByCredentials(dto);

    if (!user) {
      this.responseService.unauthorized("invalid credentials", res);
      return;
    }

    this.responseService.ok(user, res);
  };
}
