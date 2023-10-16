"use client";

import * as z from "zod";
import { Form, useForm } from "react-hook-form";
import { MessageSquare } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";

import Heading from "@/components/heading";
import { FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  prompt: z.string().min(6),
});

export default function ConversationPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const onsubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
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
            className="p-4 md:p-5 border rounded-xl grid grid-cols-12"
          >
            <FormField
              name="prompt"
              render={({ field }) => (
                <FormItem className="col-span-12 md:col-span-10">
                  <FormControl>
                    <Input />
                  </FormControl>
                </FormItem>
              )}
            />
          </form>
        </Form>
      </div>
    </div>
  );
}
