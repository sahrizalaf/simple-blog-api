import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createUserController = async (req: Request, res: Response) => {
  const result = await prisma.user.create({
    data: { ...req.body },
  });
  res.json(result);
};

export const getUserByUsernameController = async (
  req: Request,
  res: Response,
) => {
  const { username } = req.params;
  const user = await prisma.user.findUnique({
    where: { username: String(username) },
  });
  res.json(user);
};
