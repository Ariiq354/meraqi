import type { Metadata } from "next";
import { Courier_Prime } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import { cn } from "@/lib/utils";

const courier = Courier_Prime({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(courier.className, "bg-[url('/BG.jpg')]")}>
        {children}
      </body>
    </html>
  );
}
