import mongoose from 'mongoose';
import { Schema } from 'mongoose'

export const TaskSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: false },
  status: { type: String, required: true },
  until: { type: Date, required: false },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model('Task', TaskSchema);