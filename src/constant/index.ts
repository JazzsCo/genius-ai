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
    bgcolor: "text-sky-700/10",
  },
  {
    name: "Conversation",
    href: "/conversation",
    icon: MessageSquare,
    color: "text-pink-700",
    bgcolor: "text-pink-700/10",
  },
  {
    name: "Image Generation",
    href: "/image",
    icon: ImageIcon,
    color: "text-violet-700",
    bgcolor: "text-violet-700/10",
  },
  {
    name: "Music Generation",
    href: "/music",
    icon: Music,
    color: "text-emerald-700",
    bgcolor: "text-emerald-700/10",
  },
  {
    name: "Video Generation",
    href: "/video",
    icon: VideoIcon,
    color: "text-fuchsia-700",
    bgcolor: "text-fuchsia-700/10",
  },
  {
    name: "Code Generation",
    href: "/code",
    icon: Code,
    color: "text-cyan-700",
    bgcolor: "text-cyan-700/10",
  },
  {
    name: "Setting",
    href: "/setting",
    icon: Settings,
    color: "text-slate-500",
  },
];
