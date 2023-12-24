import { body } from "express-validator";

export const authValidation = [
  body("email", "Uncorrect email").isEmail(),
  body(
    "password",
    "Password must be longer than 5 and shorter than 12"
  ).isLength({ min: 5, max: 12 }),
];
