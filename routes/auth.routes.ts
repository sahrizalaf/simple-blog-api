import express from "express";
import { loginController } from "../controllers/auth.controllers";
import { validateLogin } from "../utils/auth.validator";

export const authRoutes = express.Router();

authRoutes.post("/login", validateLogin, loginController);
