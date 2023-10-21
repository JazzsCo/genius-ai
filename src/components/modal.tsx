"use client";

import axios from "axios";
import { useState } from "react";
import { useTheme } from "next-themes";
import { Check, Zap } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useProModal } from "@/hooks/use-pro-modal";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { routes } from "@/constant";

const Modal = () => {
  const proModal = useProModal();
  // const [loading, setLoading] = useState(false);

  const theme = useTheme().theme;

  // const onSubscribe = async () => {
  //   try {
  //     setLoading(true);
  //     const response = await axios.get("/api/stripe");

  //     window.location.href = response.data.url;
  //   } catch (error) {
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex justify-center items-center flex-col">
            <div className="flex flex-wrap items-center justify-center gap-x-2 font-bold text-lg">
              Upgrade to Genius
              <Badge
                variant="preminum"
                className="text-sm text-white py-0.5 px-2.5"
              >
                Pro
              </Badge>
            </div>
          </DialogTitle>
          <DialogDescription className="text-center pt-2 space-y-2 text-zinc-900 font-medium">
            {routes
              .filter((route) => route.name !== "Setting")
              .map((route) => (
                <Card
                  key={route.href}
                  className="p-2 sm:p-3 border-black/5 dark:border-gray-900 flex items-center justify-between hover:shadow-md dark:hover:shadow-gray-900 transition cursor-pointer rounded-xl"
                >
                  <div className="flex items-center gap-x-4 sm:gap-x-3">
                    <div
                      className={`p-2 w-fit rounded-xl ${
                        theme === "dark" ? route.darkbgcolor : route.bgcolor
                      }`}
                    >
                      <route.icon
                        className={cn("w-5 h-5 sm:w-7 sm:h-7", route.color)}
                      />
                    </div>
                    <div className="font-semibold text-ellipsis overflow-hidden">
                      {route.name}
                    </div>
                  </div>
                  <Check className="w-5 h-5" />
                </Card>
              ))}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            // disabled={loading}
            // onClick={onSubscribe}
            variant="preminum"
            className="w-full rounded-xl text-white"
          >
            Upgrade
            <Zap className="w-4 h-4 ml-2 fill-white" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
