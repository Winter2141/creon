import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./style/globals.css";
import "./style/font.css";
import "./style/custom.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Creon NFT",
  description: "NFT APP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
