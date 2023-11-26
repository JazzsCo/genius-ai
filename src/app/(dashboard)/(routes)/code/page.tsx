import prisma from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";

import CodeClient from "@/components/client/code-client";

const CodePage = async () => {
  const { userId } = auth();

  const code = await prisma.code.findMany({
    where: {
      userId: userId!,
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  return <CodeClient items={code} />;
};

export default CodePage;
