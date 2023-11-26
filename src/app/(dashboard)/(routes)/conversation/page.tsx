import prisma from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";

import ConversationClient from "@/components/client/conversation-client";

const ConversationPage = async () => {
  const { userId } = auth();

  const conversation = await prisma.conversation.findMany({
    where: {
      userId: userId!,
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  return <ConversationClient items={conversation} />;
};

export default ConversationPage;
