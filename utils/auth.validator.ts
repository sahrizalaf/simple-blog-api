import { Request, Response, NextFunction } from "express";
import Joi, { ValidationResult } from "Joi";

export const authSchema = Joi.object({
  username: Joi.string().required().min(8),
  password: Joi.string().required().min(8),
});

export const validateLogin = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const result: ValidationResult = authSchema.validate(req.body, {
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
