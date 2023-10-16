import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface HeadingProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  bgcolor?: string;
}

const Heading = ({
  title,
  description,
  icon: Icon,
  color,
  bgcolor,
}: HeadingProps) => {
  return (
    <div className="flex items-center space-x-3 mb-6">
      <div
        className={cn(
          "p-2 lg:p-3 w-fit rounded-xl dark:bg-pink-700/25",
          bgcolor
        )}
      >
        <Icon className={cn("w-5 h-5 sm:w-7 sm:h-7", color)} />
      </div>
      <div>
        <h1 className="font-medium text-sm md:text-base lg:text-xl">{title}</h1>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default Heading;
