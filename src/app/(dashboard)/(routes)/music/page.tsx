import prisma from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";

import MusicClient from "@/components/client/music-client";

const MusicPage = async () => {
  const { userId } = auth();

  const music = await prisma.music.findMany({
    where: {
      userId: userId!,
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  return <MusicClient items={music} />;
};

export default MusicPage;
