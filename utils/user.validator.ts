import { Request, Response, NextFunction } from "express";
import Joi, { ValidationResult } from "Joi";

export const userSchema = Joi.object({
  id: Joi.number().integer().required(),
  email: Joi.string().email().required(),
  username: Joi.string().required().min(8),
  name: Joi.string().required(),
});

export const validateUser = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const result: ValidationResult = userSchema.validate(req.body, {
    abortEarly: false,
  });

  if (result.error) {
    return res.status(422).json({
      message: "Invalid request data",
      errors: result.error.details.map((err) => err.message),
    });
  }

  next();
};
