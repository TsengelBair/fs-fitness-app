import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/auth.routes";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 7000;
const DB_URL = process.env.DB_URL || "";

app.use("/api/auth", authRoutes);

const start = () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
    mongoose
      .connect(DB_URL)
      .then(() => console.log("DB OK"))
      .catch((e) => console.log(e));
  } catch (e) {
    console.log(e);
  }
};

start();

export default app;
