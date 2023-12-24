import express, { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/User";
import checkAuth from "../utils/checkAuth";
import { authValidation } from "../validation";
import { validationResult } from "express-validator";
import dotenv from "dotenv";
dotenv.config();

const router = express.Router();

const secretKey = process.env.SECRET_KEY || "";

if (!secretKey) {
  throw new Error("Секретный ключ JWT не найден");
}

router.post(
  "/registration",
  authValidation,
  async (req: Request, res: Response) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { email, password } = req.body;

      const candidate = await User.findOne({ email });
      if (candidate) {
        return res
          .status(400)
          .json({ message: `User with email ${email} already exist` });
      }

      const passwordHash = await bcrypt.hash(password, 5);
      const user = new User({ email, password: passwordHash });
      await user.save();
      return res.status(200).json({ message: "Success registration!" });
    } catch (e) {
      console.log(e);
      return res.status(500).json({ message: "Server error" });
    }
  }
);

router.post("/login", authValidation, async (req: Request, res: Response) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ message: `User with email ${email} doesn't exist` });
    }

    const isValidPass = bcrypt.compareSync(password, user.password);
    if (!isValidPass) {
      return res.status(400).json({ message: "Invalid password" });
    }
    const token = jwt.sign({ _id: user._id }, secretKey, { expiresIn: "2h" });
    return res.status(200).json({ user, token });
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: "Server error" });
  }
});

router.get("/me", checkAuth, async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const userData = user.toObject(); // Преобразование Mongoose объекта в объект данных

    const { password, ...userInfo } = userData;
    return res.status(200).json(userInfo);
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: "Server error" });
  }
});

export default router;
