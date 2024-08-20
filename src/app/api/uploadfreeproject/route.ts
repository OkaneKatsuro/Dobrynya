"use server";
import { NextRequest, NextResponse } from "next/server";
import { initDatabase, addFreeProject } from "@/db/db";

export async function POST(req: NextRequest) {
  await initDatabase(); // Инициализируем базу данных при запуске запроса

  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const link = formData.get("link") as string;

    if (!file) {
      return NextResponse.json(
          { error: "No files received." },
          { status: 400 }
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    // Сохраняем информацию о файле в базу данных
    const itemId = await addFreeProject(title, description, buffer, link);

    return NextResponse.json({
      message: "Success",
      itemId,
      status: 201,
    });
  } catch (error: any) {
    console.error("Error occurred:", error);
    return NextResponse.json({
      message: "Failed",
      error: error.message,
      status: 500,
    });
  }
}
