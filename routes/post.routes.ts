import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const postRoutes = express.Router();

postRoutes.get("/", async (req: Request, res: Response) => {
  const posts = await prisma.post.findMany({
    include: { author: true },
  });
  res.json(posts);
});

postRoutes.post("/", async (req: Request, res: Response) => {
  const { content, authorEmail } = req.body;
  const result = await prisma.post.create({
    data: {
      content,
      author: { connect: { email: authorEmail } },
    },
  });
  res.json(result);
});

postRoutes.get("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const post = await prisma.post.findUnique({
    where: { id: Number(id) },
  });
  res.json(post);
});

postRoutes.put("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const post = await prisma.post.update({
    where: { id: Number(id) },
    data: {
      ...req.body,
    },
  });
  res.json(post);
});

postRoutes.delete("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const post = await prisma.post.delete({
    where: { id: Number(id) },
  });
  res.json(post);
});
