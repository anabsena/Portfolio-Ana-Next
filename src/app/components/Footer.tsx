"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { GoArrowUpRight, GoArrowUp } from "react-icons/go";
import Button from "./Button";
import Icon from "./Icon";
import {
  PiGithubLogoLight,
  PiLinkedinLogoLight,
  PiInstagramLogoLight,
  PiWhatsappLogoLight,
} from "react-icons/pi";
import Link from "next/link";

const Footer = () => {
  const pathname = usePathname(); 

  const scrollToTop = () => {
    const scrollDuration = 800;
    const scrollStep = -window.scrollY / (scrollDuration / 15);

    const scrollInterval = setInterval(() => {
      if (window.scrollY <= 0) {
        clearInterval(scrollInterval);
      } else {
        window.scrollBy(0, scrollStep);
      }
    }, 15);
  };

  return (
    <div className="w-full">
      <div className="bg-details/5 p-3 border border-primary/15">
        <div className="flex overflow-hidden gap-8">
          {Array.from({ length: 10 }).map((_, i) => (
            <React.Fragment key={i}>
              <span className="whitespace-nowrap">Vamos conversar </span>
              <span>+++</span>
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-8 py-12">
        <h1 className="font-quicksand uppercase font-bold text-xs md:text-sm">
          Algum projeto em mente?
        </h1>
        <div className="flex flex-col gap-4 text-center items-center">
          <h1 className="font-quicksand text-4xl md:text-6xl tracking-wider">
            Vamos fazer o seu
          </h1>
          <h1 className="font-petit_formal_script text-5xl md:text-7xl tracking-wider">
            Site brilhar
          </h1>
          <p className="text-xl text-center md:w-1/2 font-light font-quicksand opacity-90">
            Ajudo sua empresa a se destacar no mercado com um site bonito, bem
            pensado para converter e com ótima posição no ranqueamento.
          </p>
          <Link href="/contact">
            <Button variant="secondary" className="flex gap-2 items-center">Entre em contato<GoArrowUpRight /></Button>
          </Link>
        </div>
      </div>
      <div className="flex justify-around pt-28">
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-quicksand">Páginas</h1>
          {[
            { href: "/", label: "Home" },
            { href: "/services", label: "Serviços" },
            { href: "/about", label: "Sobre mim" },
            { href: "/projects", label: "Projetos" },
            { href: "/contact", label: "Contato" },
          ].map((page) => (
            <a
              key={page.href}
              href={page.href}
              className={`uppercase ${
                pathname === page.href ? "opacity-100 font-bold" : "opacity-50"
              }`}
            >
              {page.label}
            </a>
          ))}
        </div>
        <div className="flex flex-col gap-4">
          <h1 className=" text-lg font-cinzel">Ana.</h1>
          <div className="flex flex-col gap-2">
            <Icon
              className="text-xl"
              text="Github"
              onClick={() => window.open("https://github.com/anabsena", "_blank")}
            >
              <PiGithubLogoLight />
            </Icon>
            <Icon
              className="text-xl"
              text="Linkedln"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/ana-beatriz-sena-546b6722a/",
                  "_blank"
                )
              }
            >
              <PiLinkedinLogoLight />
            </Icon>
            <Icon
              className="text-xl"
              text="Instagram"
              onClick={() =>
                window.open("https://www.instagram.com/ana_beatriz_sena/", "_blank")
              }
            >
              <PiInstagramLogoLight />
            </Icon>
            <Icon
              className="text-xl"
              text="Whatsapp"
              onClick={() =>
                window.open("https://wa.me/5543999274825", "_blank")
              }
            >
              <PiWhatsappLogoLight />
            </Icon>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-8 border-t border-primary/15 p-8">
        <h1>© Todos os direitos reservados </h1>
        <Icon className="text-xl" text="Ir para o topo" onClick={scrollToTop}>
          <GoArrowUp />
        </Icon>
      </div>
    </div>
  );
};

export default Footer;
