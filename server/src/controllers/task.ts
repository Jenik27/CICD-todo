import Task from "../schemas/Task";
import { Request, Response } from "express";
import { Error } from "mongoose";

export const createTask = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const task = new Task(req.body);
    const savedTask = await task.save();
    res.status(200).json(savedTask);
  } catch (error: Error | any) {
    res.status(400).json({ message: error.message });
    console.log(error)
  }
};

export const getTasks = async (req: Request, res: Response): Promise<void> => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error: Error | any) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteTask = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    res.status(200).json(task);
  } catch (error: Error | any) {
    res.status(400).json({ message: error.message });
    console.log(error)
  }
};
