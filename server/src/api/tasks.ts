import { Router } from "express";
import { createTask, deleteTask, getTasks } from "../controllers/task";

const router = Router();

router.get("/", getTasks);
router.post("/", createTask);
router.delete("/:id", deleteTask);
export default router;
