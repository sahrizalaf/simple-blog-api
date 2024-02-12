import express from "express";
import {
  getAllPostsController,
  getPostByIdController,
  createPostController,
  updatePostController,
  deletePostController,
} from "../controllers/post.controllers";
import { validatePost } from "../utils/post.validator";

export const postRoutes = express.Router();

postRoutes.get("/", getAllPostsController);
postRoutes.post("/", validatePost, createPostController);
postRoutes.get("/:id", getPostByIdController);
postRoutes.put("/:id", validatePost, updatePostController);
postRoutes.delete("/:id", deletePostController);
