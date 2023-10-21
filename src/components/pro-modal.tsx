"use client";

import { useEffect, useState } from "react";

import Modal from "@/components/modal";

const ProModal = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <div className="flex flex-1 justify-center items-center">
      <Modal />
    </div>
  );
};

export default ProModal;
