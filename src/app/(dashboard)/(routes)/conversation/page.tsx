import { MessageSquare } from "lucide-react";

import Heading from "@/components/heading";

export default function ConversationPage() {
  return (
    <div className="px-3 md:px-5 mt-4">
      <Heading
        title="Conversation"
        description="Conversation with AI."
        icon={MessageSquare}
        color="text-pink-600"
        bgcolor="bg-pink-700/10"
      />
      <h1>hello</h1>
    </div>
  );
}
