import prisma from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";

import ImageClient from "@/components/client/image-client";

const ImagePage = async () => {
  const { userId } = auth();

  const image = await prisma.image.findMany({
    where: {
      userId: userId!,
    },
    orderBy: {
      createdAt: "asc",
    },
  });

  return <ImageClient items={image} />;
};

export default ImagePage;
