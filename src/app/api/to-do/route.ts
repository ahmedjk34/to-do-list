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
    const { title, text, id } = await request.json();
    console.log(id);
    toDoModel.create({
      title: title,
      text: text,
      todoId: id,
    });
    return new NextResponse("Done", {
      status: 201,
    });
  } catch (err: any) {
    NextResponse.json({ error: err.message });
  }
}

export async function DELETE(request: NextRequest) {
  await connectDB();
  const { _id } = await request.json();
  try {
    const result = await toDoModel.findByIdAndDelete(_id);
    if (result) {
      return new NextResponse("Document deleted", { status: 200 });
    } else {
      return new NextResponse("No document found with that ID", {
        status: 404,
      });
    }
  } catch (err: any) {
    NextResponse.json({ error: err.message });
  }
}
