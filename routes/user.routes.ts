import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const userRoutes = express.Router();

userRoutes.post("/", async (req: Request, res: Response) => {
  console.log("payload =>", req);
  const result = await prisma.user.create({
    data: { ...req.body },
  });
  res.json(result);
});

userRoutes.get("/:username", async (req: Request, res: Response) => {
  const { username } = req.params;
  const user = await prisma.user.findUnique({
    where: { username: String(username) },
  });
  res.json(user);
});
