import connectDB from "@/lib/connectDB";
import toDoModel from "@/models/toDoModel";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  await connectDB();
  try {
    const toDos = await toDoModel.find({});
    return NextResponse.json(toDos);
  } catch (err: any) {
    NextResponse.json({ error: err.message });
  }
}
export async function POST(request: NextRequest) {
  await connectDB();
  try {
    const { title, text } = await request.json();
    toDoModel.create({
      title: title,
      text: text,
    });
    console.log(title);
    return new NextResponse("Done", {
      status: 201,
    });
  } catch (err: any) {
    NextResponse.json({ error: err.message });
  }
}
