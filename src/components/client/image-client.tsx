"use client";

import * as z from "zod";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Download, ImageIcon } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";

import Empty from "@/components/empty";
import Heading from "@/components/heading";
import Loading from "@/components/loading";
import BotAvatar from "@/components/botavatar";
import UserAvatar from "@/components/useravatar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { amountOptions, resolutionOptions } from "@/constant";
import { Card, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { useProModal } from "@/hooks/use-pro-modal";
import { Image as ImageType } from "@prisma/client";

const formSchema = z.object({
  prompt: z.string().min(1),
  amount: z.string().min(1),
  resolution: z.string().min(1),
});

interface ImageClientProps {
  items: ImageType[];
}

export default function ImageClient({ items }: ImageClientProps) {
  const router = useRouter();
  const proModal = useProModal();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
      amount: "1",
      resolution: "256x256",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await axios.post("/api/image", {
        values,
      });

      form.reset();
    } catch (error: any) {
      if (error?.response?.status === 403) {
        proModal.onOpen();
      }
    } finally {
      router.refresh();
    }
  };

  return (
    <div className="h-full px-[10px] md:px-5 mt-4">
      <Heading
        title="Image Generation"
        description="Turn to you prompt into image."
        icon={ImageIcon}
        color="text-violet-600"
        bgcolor="bg-violet-700/10"
        darkbgcolor="bg-violet-700/25"
      />

      <div className="px-2">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="p-4 py-2 md:p-5 space-y-1 md:space-y-0 border rounded-xl grid items-center grid-cols-12 gap-x-1 focus-within:shadow-sm"
          >
            <FormField
              name="prompt"
              control={form.control}
              render={({ field }) => (
                <FormItem className="col-span-12 md:col-span-6">
                  <FormControl className="p-0">
                    <Input
                      {...field}
                      disabled={isLoading}
                      placeholder="Create a picture with watherfall 👽"
                      className="border-0 md:border-r-[1px] h-7 px-3 py-5 rounded-xl outline-none focus-visible:ring-transparent"
                    />
                  </FormControl>
                  {/* <FormMessage /> */}
                </FormItem>
              )}
            />
            <FormField
              name="amount"
              control={form.control}
              render={({ field }) => (
                <FormItem className="col-span-12 md:col-span-2 md:ml-1">
                  <Select
                    value={field.value}
                    disabled={isLoading}
                    defaultValue={field.value}
                    onValueChange={field.onChange}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue defaultValue={field.value} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {amountOptions.map((option) => (
                        <SelectItem key={option?.name} value={option?.value!}>
                          {option?.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <FormField
              name="resolution"
              control={form.control}
              render={({ field }) => (
                <FormItem className="col-span-12 md:col-span-2">
                  <Select
                    value={field.value}
                    disabled={isLoading}
                    defaultValue={field.value}
                    onValueChange={field.onChange}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue defaultValue={field.value} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {resolutionOptions.map((option) => (
                        <SelectItem key={option?.name} value={option?.value!}>
                          {option?.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <Button
              type="submit"
              disabled={isLoading}
              className="col-span-12 md:col-span-2 rounded-xl"
            >
              Generate
            </Button>
          </form>
        </Form>
      </div>

      <div className="px-2 mt-6">
        {isLoading && <Loading />}
        {!items.length && !isLoading && (
          <Empty title="No image generation started." />
        )}
        <div className="flex flex-col-reverse gap-y-3 mt-3">
          {items.map((item) => (
            <div key={item.id} className="flex flex-col-reverse gap-y-3">
              <div className="p-5 py-3 flex justify-start items-start gap-x-2 border rounded-xl">
                <UserAvatar />
                <p className="text-[15px] mt-1.5 leading-6">{item.question}</p>
              </div>

              <div className="p-5 py-3 flex justify-start items-start gap-x-2 border rounded-xl bg-muted">
                <BotAvatar />
                <div className="flex flex-wrap justify-center gap-3 xl:gap-5 mt-1.5">
                  {item.imageUrl.map((url: string) => (
                    <Card key={url} className="rounded-xl overflow-hidden">
                      <div className="relative aspect-square w-[190px]">
                        <Image fill alt="Image" src={url} />
                      </div>
                      <CardFooter className="p-2">
                        <Button
                          onClick={() => window.open(url)}
                          variant="outline"
                          className="rounded-xl w-full"
                        >
                          <Download className="h-4 w-4 mr-2" />
                          <p className="text-sm">Download</p>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
