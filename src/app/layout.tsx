import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import * as styles from "./globals.css";

export const metadata: Metadata = {
  title: "Nami-Socket",
  description: "Nami의 블로그",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={[GeistMono.className, styles.body].join(" ")}>
        {children}
      </body>
    </html>
  );
}
