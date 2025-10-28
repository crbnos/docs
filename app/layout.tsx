import "@/app/global.css";
import { RootProvider } from "fumadocs-ui/provider";
import type { Metadata } from "next";
import { Geist } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Carbon",
  description: "Open Source Manufacturing ERP Documentation",
  icons: {
    icon: [
      { url: "/favicon.svg", sizes: "16x16", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: "/apple-touch-icon.svg",
  },
  manifest: "/site.webmanifest",
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en" className={geist.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
