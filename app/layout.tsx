import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Learn Project Next",
  description: "Next.js + React + TypeScript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
