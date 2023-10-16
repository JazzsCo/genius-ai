"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { MessageSquare } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";

import Heading from "@/components/heading";
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

export default function ConversationPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onsubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values.prompt);
  };

  return (
    <div className="px-[10px] md:px-5 mt-4">
      <Heading
        title="Conversation"
        description="Conversation with AI."
        icon={MessageSquare}
        color="text-pink-600"
        bgcolor="bg-pink-700/10"
      />
      <div className="px-2">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onsubmit)}
            className="p-4 py-2 md:p-5 border rounded-xl grid items-center grid-cols-12 focus-within:shadow-sm"
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
              className="col-span-12 md:col-span-2 rounded-xl ml-1"
            >
              Generate
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
