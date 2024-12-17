"use client";
import Image from "next/image";
import React from "react";
import { GoArrowDown, GoArrowRight } from "react-icons/go";
import Icon from "../components/Icon";
import Button from "../components/Button";
import {
  PiLinkedinLogoLight,
  PiInstagramLogoLight,
  PiWhatsappLogoLight,
} from "react-icons/pi";

const Page = () => {
  return (
    <div className="w-full flex items-center justify-center mt-32">
      <div className="flex w-3/4 items-start gap-8">
        <div className="sticky top-8 h-fit w-full">
          <Image
            src="/img/ana-arte.png"
            width={420}
            height={420}
            alt="Logo Ana"
            className="opacity-70"
          />
        </div>
        <div className="flex flex-col gap-16">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col gap-1">
              <h1 className="md:text-9xl text-8xl font-quicksand whitespace-nowrap">
                Ana
              </h1>
              <h1 className="font-petit_formal_script text-8xl tracking-wider">
                Beatriz Sena
              </h1>
            </div>
            <p className="font-quicksand text-2xl tracking-wider opacity-70 w-3/4">
              Impulsionando sua empresa através do digital, com sites que
              convertem.
            </p>
            <Icon text="Sobre mim">
              <GoArrowDown />
            </Icon>
          </div>
          <div className="flex flex-col gap-4">

          <div className="bg-details/5 border border-primary/15 p-12 flex flex-col gap-8 mt-12 rounded-lg shadow-lg w-full">
            <h1 className="text-xs uppercase md:text-sm font-bold opacity-70 font-quicksand tracking-wider">
              Ana Beatriz Sena
            </h1>
            <h1 className="text-3xl md:text-5xl font-quicksand w-full">
              Conte comigo para dar vida ao seu negócio e as suas ideias
            </h1>
            <p className="font-quicksand text-sm md:text-base">
              Como uma web designer e desenvolvedora freelancer, trago uma
              combinação única de criatividade e conhecimento técnico para cada
              projeto.
            </p>
            <p className="font-quicksand text-sm md:text-base">
              Com um olhar aguçado para o design e uma paixão por entregar
              experiências web amigáveis ​​ao usuário, trabalho em estreita
              colaboração com os clientes para entender suas necessidades e dar
              vida à sua visão.
            </p>
            <p className="font-quicksand text-sm md:text-base">
              Minha abordagem é enraizada na colaboração e comunicação, e tenho
              orgulho da minha capacidade de explicar conceitos técnicos em
              termos simples. Quer eu esteja desenvolvendo um novo site do zero
              ou otimizando um site existente para mecanismos de busca, sempre
              busco a excelência tanto na forma quanto na função. Com dedicação
              à qualidade e um compromisso em ficar por dentro das últimas
              tendências e tecnologias, estou confiante na minha capacidade de
              entregar resultados excepcionais que excedem as expectativas dos
              meus clientes.
            </p>
            <div className="bg-details/5 border border-primary/15 flex justify-center rounded-lg shadow-lg w-full">
              <Image
                src="/img/foto-ana.png"
                width={420}
                height={420}
                alt="Logo Ana"
                className="opacity-80"
              />
            </div>
          </div>
          <div className="w-full flex justify-between gap-4">
            <Button className="w-full">
              <div className="flex justify-between p-2">
                <div className="flex items-center gap-4">
                  <PiWhatsappLogoLight className="text-xl" />
                  <span>Whatsapp</span>
                </div>
                <GoArrowRight />
              </div>
            </Button>
            <Button className="w-full p-4">
              <div className="flex justify-between p-2">
                <div className="flex items-center gap-4">
                  <PiInstagramLogoLight className="text-xl" />
                  <span>Instagram</span>
                </div>
                <GoArrowRight />
              </div>
            </Button>
            <Button className="w-full p-4">
              <div className="flex justify-between p-2">
                <div className="flex items-center gap-4">
                  <PiLinkedinLogoLight className="text-xl" />
                  <span>Linkedln</span>
                </div>
                <GoArrowRight />
              </div>
            </Button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
