import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Menu from "./components/Menu";


export const metadata: Metadata = {
  title: {
    template: "%s - Aninha",
    default: "Aninha",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="w-full flex flex-col items-center">
        <Menu />
        <div className="mt-16 z-40">{children}</div>
      </body>
    </html>
  );
}
