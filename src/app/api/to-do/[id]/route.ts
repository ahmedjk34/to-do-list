import connectDB from "@/lib/connectDB";
import toDoModel from "@/models/toDoModel";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  await connectDB();
  try {
    const toDos = await toDoModel.findById(params.id);
    console.log(toDos);
    return NextResponse.json(toDos);
  } catch (err: any) {
    return NextResponse.json({ error: err.message });
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  await connectDB();
  try {
    const { title, text } = await request.json();
    await toDoModel.findByIdAndUpdate(params.id, {
      title: title,
      text: text,
    });
    return new NextResponse("Done", { status: 204 });
  } catch (err: any) {
    return NextResponse.json({ error: err.message });
  }
}
