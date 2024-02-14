import express from "express";
import {
  getAllPostsController,
  getPostByIdController,
  createPostController,
  updatePostController,
  deletePostController,
} from "../controllers/post.controllers";
import { validatePost } from "../utils/post.validator";
import { verifyToken } from "../middleware/auth.middleware";

export const postRoutes = express.Router();

postRoutes.get("/", getAllPostsController);
postRoutes.post("/", verifyToken, validatePost, createPostController);
postRoutes.get("/:id", getPostByIdController);
postRoutes.put("/:id", verifyToken, validatePost, updatePostController);
postRoutes.delete("/:id", verifyToken, deletePostController);
