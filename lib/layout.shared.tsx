import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { Book, Github, Globe, MessageCircle, Video } from "lucide-react";
import Image from "next/image";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <Image src="/logo.svg" width={25} height={25} alt="Carbon Logo" />
          Carbon
        </>
      ),
    },
    // see https://fumadocs.dev/docs/ui/navigation/links
    links: [
      {
        text: "API Docs",
        url: "https://app.carbon.ms/docs/api/js/intro",
        icon: <Book className="size-4" />,
      },
      {
        text: "GitHub",
        url: "https://github.com/crbnos/carbon",
        icon: <Github className="size-4" />,
      },
      {
        text: "Videos",
        url: "https://learn.carbon.ms",
        icon: <Video className="size-4" />,
      },
      {
        text: "Discord",
        url: "https://discord.gg/yGUJWhNqzy",
        icon: <MessageCircle className="size-4" />,
      },
      {
        text: "Website",
        url: "https://carbon.ms",
        icon: <Globe className="size-4" />,
      },
    ],
  };
}
