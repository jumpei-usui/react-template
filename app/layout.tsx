import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shadcn/UI Example",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="font-sans">{children}</body>
    </html>
  );
}
