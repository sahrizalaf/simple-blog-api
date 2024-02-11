import express from "express";
import {
  getAllPostsController,
  getPostByIdController,
  createPostController,
  updatePostController,
  deletePostController,
} from "../controllers/post.controllers";

export const postRoutes = express.Router();

postRoutes.get("/", getAllPostsController);
postRoutes.post("/", createPostController);
postRoutes.get("/:id", getPostByIdController);
postRoutes.put("/:id", updatePostController);
postRoutes.delete("/:id", deletePostController);
