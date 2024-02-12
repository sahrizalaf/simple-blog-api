import { NextFunction, Request, Response } from "express";
import Joi, { ValidationResult } from "Joi";

export const postSchema = Joi.object({
  content: Joi.string().required(),
  authorEmail: Joi.string().required(),
});

export const validatePost = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const result: ValidationResult = postSchema.validate(req.body, {
    abortEarly: false,
  });

  if (result.error) {
    return res.status(422).json({
      message: "Invalid data request",
      errors: result.error.details.map((err) => err.message),
    });
  }

  next();
};
