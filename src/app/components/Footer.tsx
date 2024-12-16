import React from "react";
import { GoArrowUpRight,GoArrowUp } from "react-icons/go";
import Button from "./Button";
import Icon from "./Icon";
import {
  PiGithubLogoLight,
  PiLinkedinLogoLight,
  PiInstagramLogoLight,
  PiWhatsappLogoLight,
} from "react-icons/pi";
const Footer = () => {
  return (
    <div className="w-full">
      <div className="bg-details/5 p-3 border border-primary/15">
        <div className="flex overflow-hidden gap-8">
          <span className="whitespace-nowrap">Vamos conversar </span>
          <span>+++</span>
          <span className="whitespace-nowrap">Vamos conversar </span>
          <span>+++</span>
          <span className="whitespace-nowrap">Vamos conversar </span>
          <span>+++</span>
          <span className="whitespace-nowrap">Vamos conversar </span>
          <span>+++</span>
          <span className="whitespace-nowrap">Vamos conversar </span>
          <span>+++</span>
          <span className="whitespace-nowrap">Vamos conversar </span>
          <span>+++</span>
          <span className="whitespace-nowrap">Vamos conversar </span>
          <span>+++</span>
          <span className="whitespace-nowrap">Vamos conversar </span>
          <span>+++</span>
          <span className="whitespace-nowrap">Vamos conversar </span>
          <span>+++</span>
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
          <Button className="flex gap-2 items-center" variant="secondary">
            Entre em contato <GoArrowUpRight />
          </Button>
        </div>
      </div>
      <div className="flex justify-around pt-28">
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-quicksand">Páginas</h1>
          <a href="" className="uppercase opacity-50">
            Home
          </a>
          <a href="" className="uppercase opacity-50">
            Serviços
          </a>
          <a href="" className="uppercase opacity-50">
            Sobre mim
          </a>
          <a href="" className="uppercase opacity-50">
            Projetos
          </a>
          <a href="" className="uppercase opacity-50">
            Contato
          </a>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className=" text-lg font-cinzel">Ana.</h1>
          <div className="flex flex-col gap-2">
            <Icon className="text-xl" text="Github">
              <PiGithubLogoLight />
            </Icon>
            <Icon className="text-xl" text="Linkedln">
              <PiLinkedinLogoLight />
            </Icon>
            <Icon className="text-xl" text="Instagram">
              <PiInstagramLogoLight />
            </Icon>
            <Icon className="text-xl" text="Whatsapp">
              <PiWhatsappLogoLight />
            </Icon>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-8 border-t border-primary/15 p-8">
        <h1>© Todos os direitos reservados </h1>
        <Icon className="text-xl" text="Ir para o topo">
        <GoArrowUp />
        </Icon>
      </div>
    </div>
  );
};

export default Footer;
