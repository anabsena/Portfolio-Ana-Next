import type { Metadata } from "next";
import { Cinzel, Itim, Mali, Petit_Formal_Script, Quicksand, Zen_Loop } from "next/font/google";
import "./globals.css";
import Menu from "./components/Menu";
import Footer from "./components/Footer";


export const metadata: Metadata = {
  title: {
    template: "%s - Aninha",
    default: "Aninha",
  },
};
const cinzel = Cinzel({
  subsets: ["latin"],
  weight: "400",
});
const petit_formal_script = Petit_Formal_Script({
  subsets: ["latin"],
  weight: "400",
});
const quicksand = Quicksand({
  subsets: ["latin"],
  weight: "300",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="w-full flex flex-col items-center">
        <Menu />
        <div className="z-40 my-8">{children}</div>
        <Footer/>
      </body>
    </html>
  );
}
