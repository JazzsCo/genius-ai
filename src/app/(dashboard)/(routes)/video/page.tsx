import prisma from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";

import VideoClient from "@/components/client/video-client";

const VideoPage = async () => {
  const { userId } = auth();

  const video = await prisma.video.findMany({
    where: {
      userId: userId!,
    },
    orderBy: {
      createdAt: "asc",
    },
  });
  return <VideoClient items={video} />;
};

export default VideoPage;
