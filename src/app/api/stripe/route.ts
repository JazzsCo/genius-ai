import { auth, currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { userId, user } = auth();

    if (!userId || !user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
  } catch (error) {
    console.log(error);
  }
}
