import { auth } from "@clerk/nextjs";
import prisma from "@/lib/prismadb";
import { count } from "console";
import { useId } from "react";
import { MAX_FREE_COUNTS } from "@/constant";

export const increaseUserApiLimit = async () => {
  const { userId } = auth();

  if (!userId) return false;

  const userApiLimit = await prisma.userApiLimit.findUnique({
    where: {
      userId,
    },
  });

  if (!userApiLimit) {
    await prisma.userApiLimit.create({
      data: {
        userId,
        count: 1,
      },
    });
  } else {
    await prisma.userApiLimit.update({
      data: {
        count: userApiLimit.count + 1,
      },
      where: {
        userId,
      },
    });
  }
};

export const checkUserApiLimit = async () => {
  const { userId } = auth();

  if (!userId) return false;

  const userApiLimit = await prisma.userApiLimit.findUnique({
    where: {
      userId,
    },
  });

  if (!userApiLimit || userApiLimit.count < MAX_FREE_COUNTS) {
    return true;
  }

  if (userApiLimit && userApiLimit.count === MAX_FREE_COUNTS) {
    return false;
  }
};
