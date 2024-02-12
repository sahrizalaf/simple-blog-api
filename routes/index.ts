import express from "express";
import { userRoutes } from "./user.routes";
import { postRoutes } from "./post.routes";
import { authRoutes } from "./auth.routes";

export const routes = express.Router();

routes.use("/users", userRoutes);
routes.use("/posts", postRoutes);
routes.use("/auth", authRoutes);
