import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const checkAuthorization = async (user: any, id: any) => {
  const getPost = await prisma.post.findFirst({
    where: { authorId: Number(user.id), id: Number(id) },
  });
  return getPost !== null;
};
