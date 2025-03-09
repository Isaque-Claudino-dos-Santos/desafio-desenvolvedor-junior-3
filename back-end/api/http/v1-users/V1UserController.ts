import { Request, Response } from "express";
import { validationResult } from "express-validator";
import ResponseService from "../../Services/ResponseService";
import RegisterUserDTO from "./DTOs/RegisterUserDTO";
import UserRepository from "./Repositories/UserRepository";

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

    await this.userRepository.create({
      name: dto.name,
      email: dto.email,
      password: dto.password,
    });

    this.responseService.created(dto, res);
  };
}
