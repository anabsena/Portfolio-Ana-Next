"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { GoArrowDown, GoArrowRight } from "react-icons/go";
import Icon from "../components/Icon";
import Button from "../components/Button";
import {
  PiLinkedinLogoLight,
  PiInstagramLogoLight,
  PiWhatsappLogoLight,
} from "react-icons/pi";

const Page = () => {
  const calculateAge = (birthDate: string) => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDifference = today.getMonth() - birth.getMonth();
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birth.getDate())
    ) {
      age--;
    }
    return age;
  };
  const aboutSectionRef = useRef<HTMLDivElement | null>(null);

  const scrollToAbout = () => {
    if (aboutSectionRef.current) {
      aboutSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-center mt-32 ">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 w-3/4 ">
        <div className="relative w-full ml-12 md:ml-0">
          <Image
            src="/img/ana-arte.png"
            width={420}
            height={420}
            alt="Logo Ana"
            className="opacity-70 sticky top-5"
          />
        </div>
        <div className="flex flex-col gap-16">
          <div className="flex flex-col items-center md:items-start gap-4 md:gap-12">
            <div className="flex flex-col items-center md:items-start gap-1">
              <h1 className="md:text-9xl text-4xl font-quicksand whitespace-nowrap">
                Ana
              </h1>
              <h1 className="font-petit_formal_script md:text-8xl text-3xl tracking-wider">
                Beatriz Sena
              </h1>
            </div>
            <p className="font-quicksand md:text-2xl text-md text-center md:text-start tracking-wider opacity-70 w-3/4">
              Desenvolvedora Web & UIUX Designer
            </p>
            <Icon text="Sobre mim" onClick={scrollToAbout}>
              <GoArrowDown />
            </Icon>
          </div>
          <div className="flex flex-col gap-4 p-4"  ref={aboutSectionRef}>
            <div className="bg-details/5 border border-primary/15 p-12 flex flex-col gap-8 mt-12 rounded-lg shadow-lg w-full">
              <h1 className="text-xs uppercase md:text-sm font-bold opacity-70 font-quicksand tracking-wider">
                Ana Beatriz Sena
              </h1>
              <h1 className="text-3xl md:text-5xl font-quicksand w-full">
                Transformando ideias em experiências digitais
              </h1>
              <p className="font-quicksand text-sm md:text-base">
                {`Tenho ${calculateAge(
                  "2004-07-14"
                )} anos e mais de um ano de experiência trabalhando como desenvolvedora front-end em equipe, onde também cuido do design UI/UX dos projetos. Gosto de criar interfaces que sejam bonitas, funcionais e fáceis de usar, sempre pensando na melhor experiência para o usuário.`}
              </p>

              <h1 className="text-xs uppercase md:text-sm font-bold opacity-70 font-quicksand tracking-wider">
                Experiência
              </h1>
              <div className="flex gap-4 font-quicksand w-full">
                <div>
                  <h1 className="text-xl font-bold">
                    Desenvolvedora Front-end e UIUX designer
                  </h1>
                  <p className="opacity-80">
                    BRConnect • <span className="uppercase">Set 2023</span> -
                    Presente
                  </p>
                  <ul className="list-disc pl-5 mt-4 opacity-80">
                    <li>
                      Desenvolvimento de interfaces com React, Next.js, Tailwind
                      e Material UI
                    </li>
                    <li>Design UI/UX de projetos utilizando Figma</li>
                    <li>
                      Trabalho em equipe utilizando Github
                    </li>
                    <li>
                      Criação de soluções no-code com WordPress e Elementor
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex gap-4 font-quicksand w-full">
                <div>
                  <h1 className="text-xl font-bold">
                    Estagiária em suporte técnico e desenvolvimento web
                  </h1>
                  <p className="opacity-80">
                    Dominus Software •{" "}
                    <span className="uppercase">Fev 2023</span> - Set 2023
                  </p>
                  <ul className="list-disc pl-5 mt-4 opacity-80">
                    <li>Desenvolvimento web com HTML e CSS</li>
                    <li>Atendimento ao cliente e resolução de problemas</li>
                  </ul>
                </div>
              </div>
              <h1 className="text-xs uppercase md:text-sm font-bold opacity-70 font-quicksand tracking-wider">
                Formação
              </h1>
              <div className="flex gap-4 font-quicksand w-full">
                <div>
                  <h1 className="text-xl font-bold ">
                    Análise e Desenvolvimento De Sistemas
                  </h1>
                  <p className="opacity-80 capitalize">
                    Univale • Faculdades integradas do vale do ivai
                  </p>
                 <p className="uppercase opacity-80 mt-4">Jan 2022 - Jul 2024 </p>
                </div>
              </div>
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
            <div className="w-full flex flex-col md:flex-row justify-between gap-4">
  <Button 
    className="w-full" 
    onClick={() => window.open('https://wa.me/5543999274825', '_blank')} 
  >
    <div className="flex justify-between p-2">
      <div className="flex items-center gap-4">
        <PiWhatsappLogoLight className="text-xl" />
        <span>Whatsapp</span>
      </div>
      <GoArrowRight />
    </div>
  </Button>

  <Button 
    className="w-full p-4" 
    onClick={() => window.open('https://www.instagram.com/ana_beatriz_sena/', '_blank')} 
  >
    <div className="flex justify-between p-2">
      <div className="flex items-center gap-4">
        <PiInstagramLogoLight className="text-xl" />
        <span>Instagram</span>
      </div>
      <GoArrowRight />
    </div>
  </Button>

  <Button 
    className="w-full p-4" 
    onClick={() => window.open('https://www.linkedin.com/in/ana-beatriz-sena-546b6722a/', '_blank')} 
  >
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
