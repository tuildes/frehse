import type { Metadata } from "next";
import { Lexend } from 'next/font/google'
import "./globals.css";

const lexend = Lexend({ subsets: ['latin'] })

// Components
import Navbar from "@/components/Navbar/navbar";

export const metadata: Metadata = {
  title: "Gustavo Frehse",
  description: "...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={lexend.className}>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
