import { AppPrismaClient } from "@constants/prisma-client";
import { Prisma } from "@prisma/client";

export type GetUserByCredentialsInputs = { email: string; password: string };

export default class UserRepository {
  constructor(private readonly prisma: AppPrismaClient) {}

  async create(data: Prisma.UserCreateInput) {
    await this.prisma.user.create({
      data,
    });
  }

  async getByEmail(email: string) {
    return await this.prisma.user.findFirst({
      where: { email },
    });
  }

  async getUserByCredentials(data: GetUserByCredentialsInputs) {
    return await this.prisma.user.findFirst({
      where: data,
    });
  }
}
