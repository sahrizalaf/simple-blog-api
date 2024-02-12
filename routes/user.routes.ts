import express from "express";
import {
  createUserController,
  getUserByUsernameController,
} from "../controllers/user.controllers";
import { validateUser } from "../utils/user.validator";

export const userRoutes = express.Router();

userRoutes.post("/", validateUser, createUserController);
userRoutes.get("/:username", getUserByUsernameController);
