"use client";

import { useEffect, useState } from "react";

import Modal from "@/components/modal";

const ProModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return <Modal />;
};

export default ProModalProvider;
