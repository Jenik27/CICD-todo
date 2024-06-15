import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import TasksRouter from "./api/tasks";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

const corsOptions = {
  origin: process.env.CLIENT_URL,
  optionsSuccessStatus: 200,
};

export const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string, {});
    console.log("[db]: Database connected");
  } catch (error: Error | any) {
    console.log("[db]: Database connection failed", error);
  }
};

connectDB().catch((error: Error | any) => console.log(error));

app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/tasks", TasksRouter);
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World");
});
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
