import express from "express";
import {
  createUserController,
  getUserByUsernameController,
} from "../controllers/user.controllers";

export const userRoutes = express.Router();

userRoutes.post("/", createUserController);
userRoutes.get("/:username", getUserByUsernameController);
