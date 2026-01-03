import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TransitionProvider from "./components/TransitionProvider";

export const metadata: Metadata = {
  title: "Md Sahil Alam | Software Engineer",
  description:
    "Bangalore based Software Engineer building real-world full-stack products with a strong engineering mindset. Experienced with Next.js, React, Node.js, and MongoDB.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true">
        <main>
          <TransitionProvider>{children}</TransitionProvider>
        </main>
      </body>
    </html>
  );
}
