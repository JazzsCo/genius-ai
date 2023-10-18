import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const BotAvatar = () => {
  return (
    <Avatar className="w-8 h-8">
      <AvatarImage src="/bot.jpg" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};

export default BotAvatar;
