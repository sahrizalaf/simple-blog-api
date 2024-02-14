import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const token = req.header("Authorization");

  if (!token) return res.status(401).json({ message: "Unauthorized access!" });

  try {
    const secretKey = process.env.SECRET_KEY || "SECRET";
    const bearerToken = token.split(" ")[1];
    const decoded = jwt.verify(bearerToken, secretKey);
    res.locals.userDetails = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token!" });
  }
};
