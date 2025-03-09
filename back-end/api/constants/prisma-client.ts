import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export type AppPrismaClient = typeof prisma;

export default prisma;
