"use client";

import * as z from "zod";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { VideoIcon } from "lucide-react";
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
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  prompt: z.string().min(1),
});

export default function VideoPage() {
  const router = useRouter();
  const [data, setData] = useState<[]>([]) as any;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const userMessage = values.prompt;

      const response = await axios.post("/api/video", {
        prompt: values.prompt,
      });

      setData([...data, { content: userMessage, url: response.data[0] }]);

      form.reset();
    } catch (error: any) {
      //TODO: Call pro modal
      console.log(error);
    } finally {
      router.refresh();
    }
  };

  return (
    <div className="h-full px-[10px] md:px-5 mt-4">
      <Heading
        title="Video Generation"
        description="Turn your prompt into video."
        icon={VideoIcon}
        color="text-fuchsia-600"
        bgcolor="bg-fuchsia-700/10"
        darkbgcolor="bg-fuchsia-700/25"
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
                      placeholder="Tom and Jerry 🐈‍⬛"
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
        {!data.length && !isLoading && (
          <Empty title="No conversation started." />
        )}
        <div className="flex flex-col-reverse gap-y-3 mt-3">
          {data.map((item: any) => (
            <>
              <div
                key={item.content}
                className="p-5 py-3 flex justify-start items-start gap-x-2 border rounded-xl"
              >
                <UserAvatar />
                <p className="text-[15px] mt-1.5 leading-6">{item.content}</p>
              </div>

              <video className="w-full rounded-xl aspect-video" controls>
                <source src={item.url} />
              </video>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}
