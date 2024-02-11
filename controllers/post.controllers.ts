import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllPostsController = async (req: Request, res: Response) => {
  const posts = await prisma.post.findMany({
    include: { author: true },
  });
  res.json(posts);
};

export const getPostByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const post = await prisma.post.findUnique({
    where: { id: Number(id) },
  });
  res.json(post);
};

export const createPostController = async (req: Request, res: Response) => {
  const { content, authorEmail } = req.body;
  const result = await prisma.post.create({
    data: {
      content,
      author: { connect: { email: authorEmail } },
    },
  });
  res.json(result);
};

export const updatePostController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const post = await prisma.post.update({
    where: { id: Number(id) },
    data: {
      ...req.body,
    },
  });
  res.json(post);
};

export const deletePostController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const post = await prisma.post.delete({
    where: { id: Number(id) },
  });
  res.json(post);
};
