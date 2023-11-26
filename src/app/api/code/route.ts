import OpenAI from "openai";
import prisma from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { ChatCompletionSystemMessageParam } from "openai/resources/index.mjs";

import { checkUserApiLimit, increaseUserApiLimit } from "@/lib/api-limit";
import { checkSubscription } from "@/lib/subscription";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // defaults to process.env["OPENAI_API_KEY"]
});

const instructionMessage: ChatCompletionSystemMessageParam = {
  role: "system",
  content: "You are code generator.",
};

export async function POST(req: Request) {
  try {
    const { userId } = auth();

    const body = await req.json();
    const { message } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!openai.apiKey) {
      return new NextResponse("OpenAI API Key is required.", {
        status: 500,
      });
    }

    if (!message) {
      return new NextResponse("Messages are required", { status: 400 });
    }

    const freeTrial = await checkUserApiLimit();
    const isPro = await checkSubscription();

    if (!freeTrial && !isPro) {
      return new NextResponse("Freetrial is expired.", { status: 403 });
    }

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [instructionMessage, message],
    });

    const code = await prisma.code.create({
      data: {
        userId,
        question: message?.content,
        answer: response.choices[0].message.content!,
      },
    });

    if (!isPro) {
      await increaseUserApiLimit();
    }

    return NextResponse.json(code);
  } catch (error) {
    console.log("[CODE_ERROR]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
