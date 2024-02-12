import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export const createUserController = async (req: Request, res: Response) => {
  const password = await bcrypt.hash(req.body.password, 10);
  req.body.password = password;
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
