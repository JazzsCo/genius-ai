"use client";

import * as z from "zod";
import axios, { AxiosError } from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { MessageSquare } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChatCompletionRole } from "openai/resources/index.mjs";

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
import { useProModal } from "@/hooks/use-pro-modal";
import { Conversation } from "@prisma/client";

interface ChatCompletionMessage {
  content: string | null;
  role: ChatCompletionRole;
}

interface ConversationClientProps {
  items: Conversation[];
}

const formSchema = z.object({
  prompt: z.string().min(1),
});

export default function ConversationClient({ items }: ConversationClientProps) {
  const router = useRouter();
  const proModal = useProModal();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const userMessage: ChatCompletionMessage = {
        role: "user",
        content: values.prompt,
      };

      const response = await axios.post("/api/conversation", {
        message: userMessage,
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
        title="Conversation"
        description="Conversation with AI."
        icon={MessageSquare}
        color="text-pink-600"
        bgcolor="bg-pink-700/10"
        darkbgcolor="bg-pink-700/25"
      />

      <div className="px-2">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="p-4 py-2 md:p-5 space-y-1 md:space-y-0 border rounded-xl grid items-center grid-cols-12 focus-within:shadow-sm"
          >
            <FormField
              name="prompt"
              control={form.control}
              render={({ field }) => (
                <FormItem className="col-span-12 md:col-span-10">
                  <FormControl className="p-0">
                    <Input
                      {...field}
                      disabled={isLoading}
                      placeholder="Can I have your love 😘"
                      className="border-0 md:border-r-[1px] h-7 px-3 py-5 rounded-xl outline-none focus-visible:ring-transparent"
                    />
                  </FormControl>
                  {/* <FormMessage /> */}
                </FormItem>
              )}
            />
            <Button
              type="submit"
              disabled={isLoading}
              className="col-span-12 md:col-span-2 rounded-xl md:ml-1"
            >
              Generate
            </Button>
          </form>
        </Form>
      </div>

      <div className="px-2 mt-6">
        {isLoading && <Loading />}
        {!items.length && !isLoading && (
          <Empty title="No conversation started." />
        )}
        <div className="flex flex-col-reverse gap-y-3 mt-3">
          {items.map((item) => (
            <div key={item.id} className="flex flex-col-reverse gap-y-3">
              <div
                className={cn(
                  "p-5 py-3 flex justify-start items-start gap-x-2 border rounded-xl"
                )}
              >
                <UserAvatar />
                <p className="text-[15px] mt-1.5 leading-6">{item.question}</p>
              </div>

              <div
                className={cn(
                  "p-5 py-3 flex justify-start items-start gap-x-2 border rounded-xl bg-muted"
                )}
              >
                <BotAvatar />
                <p className="text-[15px] mt-1.5 leading-6">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
