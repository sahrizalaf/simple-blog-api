import { PrismaClient } from "@prisma/client";
import express, { Request, Response } from "express";
import createError from "http-errors";
import { routes } from "../routes";

const prisma = new PrismaClient();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", routes);

app.use((req: Request, res: Response, next: Function) => {
  next(createError);
});

app.listen(3000, () => {
  console.log(`Simple Blog API service is running in port 3000`);
});
