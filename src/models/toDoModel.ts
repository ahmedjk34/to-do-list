import { ToDoType } from "@/app/Types";
import mongoose from "mongoose";

const toDoSchema = new mongoose.Schema({
  title: String,
  text: String,
});

const ToDo =
  mongoose.models.ToDo || mongoose.model<ToDoType>("ToDo", toDoSchema);
export default ToDo;
