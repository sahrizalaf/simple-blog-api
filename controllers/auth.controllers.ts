import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const prisma = new PrismaClient();

export const loginController = async (req: Request, res: Response) => {
  const username = req.body.username;
  const user = await prisma.user.findUnique({
    where: { username: String(username) },
  });

  if (!user) {
    return res.status(401).json({
      message: "Account not registered!",
    });
  }

  if (!(await bcrypt.compare(req.body.password, user.password))) {
    return res.status(401).json({ message: "Incorrect login details!" });
  }

  const payload = {
    id: user.id,
    email: user.email,
  };
  const secretKey = process.env.SECRET_KEY || "default";
  const token = jwt.sign(payload, secretKey, { expiresIn: "1d" });

  return res.json({
    message: "Successfully logged in!",
    accessToken: token,
  });
};

export const logoutController = async (_req: Request, _res: Response) => {};
