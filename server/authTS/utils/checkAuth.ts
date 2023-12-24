import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const secretKey = process.env.SECRET_KEY || "";

// Расширяем интерфейс Request, добавляя новое свойство userId
declare global {
  namespace Express {
    interface Request {
      userId?: string;
    }
  }
}

export default (req: Request, res: Response, next: NextFunction) => {
  const token = (req.headers.authorization || "").replace(/Bearer\s?/, "");

  if (token) {
    try {
      const decoded = jwt.verify(token, secretKey) as JwtPayload;

      req.userId = decoded._id;
      next();
    } catch (e) {
      console.log(e);
      return res.json({ message: "Ошибка, нет доступа" });
    }
  } else {
    return res.json({ message: "Ошибка, нет доступа" });
  }
};
