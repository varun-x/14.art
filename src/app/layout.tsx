import "@/styles/main.css";
import type { Metadata } from "next";
import { siteConfig } from "@/config";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";

const playwriteAT = localFont({
  src: [
    {
      path: "../../public/playwrite_AT/PlaywriteAT-VariableFont_wght.ttf",
      style: "normal",
    },
    {
      path: "../../public/playwrite_AT/PlaywriteAT-Italic-VariableFont_wght.ttf",
      style: "italic",
    },
  ],
  variable: "--font-playwrite",
  display: "swap",
  fallback: [
    "ui-sans-serif",
    "system-ui",
    "-apple-system",
    "BlinkMacSystemFont",
    "Segoe UI",
    "sans-serif",
  ],
});

export const metadata: Metadata = siteConfig;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html suppressHydrationWarning={true} lang="en">
      <body
        suppressHydrationWarning={true}
        className={cn(playwriteAT.className, "antialiased", "")}
      >
        {children}
      </body>
    </html>
  );
}
