"use client";

import * as z from "zod";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { Code as CodeIcon } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChatCompletionRole } from "openai/resources/index.mjs";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  dracula,
  oneLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";

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
import { useTheme } from "next-themes";
import { useProModal } from "@/hooks/use-pro-modal";
import Error, { ErrorProps } from "next/error";
import { Code } from "@prisma/client";

interface ChatCompletionMessage {
  content: string | null;
  role: ChatCompletionRole;
}

interface CodeClientProps {
  items: Code[];
}

const formSchema = z.object({
  prompt: z.string().min(1),
});

export default function CodeClient({ items }: CodeClientProps) {
  const router = useRouter();
  const proModal = useProModal();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;
  const theme = useTheme().theme;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const userMessage: ChatCompletionMessage = {
        role: "user",
        content: values.prompt,
      };

      const response = await axios.post("/api/code", {
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
        title="Code Generation"
        description="Generate you code with ai."
        icon={CodeIcon}
        color="text-cyan-600"
        bgcolor="bg-cyan-700/10"
        darkbgcolor="bg-cyan-700/25"
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
                      placeholder="Create react button with tailwindcss 🧠"
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
          <Empty title="No code generation started." />
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
                <Markdown
                  // eslint-disable-next-line react/no-children-prop
                  children={item.answer}
                  className="overflow-hidden text-sm leading-6 mt-1.5"
                  components={{
                    code(props) {
                      const { children, className, node, ...rest } = props;
                      const match = /language-(\w+)/.exec(className || "");
                      return match ? (
                        //@ts-ignore
                        <SyntaxHighlighter
                          {...rest}
                          // eslint-disable-next-line react/no-children-prop
                          children={String(children).replace(/\n$/, "")}
                          style={theme === "dark" ? dracula : oneLight}
                          language={match[1]}
                          PreTag="div"
                        />
                      ) : (
                        <code {...rest} className={className}>
                          {children}
                        </code>
                      );
                    },
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
