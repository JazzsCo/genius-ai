import {
  LayoutDashboard,
  MessageSquare,
  ImageIcon,
  Music,
  VideoIcon,
  Code,
  Settings,
} from "lucide-react";

export const routes = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
    color: "text-sky-700",
    bgcolor: "bg-sky-700/10",
    darkbgcolor: "bg-sky-700/25",
  },
  {
    name: "Conversation",
    href: "/conversation",
    icon: MessageSquare,
    color: "text-pink-600",
    bgcolor: "bg-pink-700/10",
    darkbgcolor: "bg-pink-700/25",
  },
  {
    name: "Image Generation",
    href: "/image",
    icon: ImageIcon,
    color: "text-violet-600",
    bgcolor: "bg-violet-700/10",
    darkbgcolor: "bg-violet-700/25",
  },
  {
    name: "Music Generation",
    href: "/music",
    icon: Music,
    color: "text-emerald-600",
    bgcolor: "bg-emerald-700/10",
    darkbgcolor: "bg-emerald-700/25",
  },
  {
    name: "Video Generation",
    href: "/video",
    icon: VideoIcon,
    color: "text-fuchsia-600",
    bgcolor: "bg-fuchsia-700/10",
    darkbgcolor: "bg-fuchsia-700/25",
  },
  {
    name: "Code Generation",
    href: "/code",
    icon: Code,
    color: "text-cyan-600",
    bgcolor: "bg-cyan-700/10",
    darkbgcolor: "bg-cyan-700/25",
  },
  {
    name: "Setting",
    href: "/setting",
    icon: Settings,
    color: "text-slate-500",
  },
];

export const amountOptions = [
  {
    value: "1",
    name: "1 photo",
  },
  {
    value: "2",
    name: "2 photos",
  },
  {
    value: "3",
    name: "3 photos",
  },
  ,
  {
    value: "4",
    name: "4 photos",
  },
  ,
  {
    value: "5",
    name: "5 photos",
  },
];

export const resolutionOptions = [
  {
    value: "256x256",
    name: "256x256",
  },
  {
    value: "512x512",
    name: "512x512",
  },
  {
    value: "1024x1024",
    name: "1024x1024",
  },
];

export const MAX_FREE_COUNTS = 5;

export const DAY_IN_MS = 86_400_00;

export const absoluteUrl = (path: string) => {
  return process.env.NEXT_PUBLIC_URL + path;
};
