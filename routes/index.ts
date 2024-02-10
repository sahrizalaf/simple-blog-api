import express from "express";
import { userRoutes } from "./user.routes";
import { postRoutes } from "./post.routes";

export const routes = express.Router();

routes.use("/user", userRoutes);
routes.use("/posts", postRoutes);
