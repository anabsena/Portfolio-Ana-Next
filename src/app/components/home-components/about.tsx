import Image from "next/image";
import React from "react";
import Icon from "../Icon";
import {
  PiGithubLogoLight,
  PiLinkedinLogoLight,
  PiInstagramLogoLight,
  PiWhatsappLogoLight,
} from "react-icons/pi";

const About = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-12 px-4">
      <div className="flex items-center justify-center gap-8 overflow-hidden flex-col md:flex-row">
        <h1 className="md:text-9xl text-6xl font-quicksand whitespace-nowrap">
          Ana Beatriz
        </h1>
        <Image
          src="/img/ana-arte.png"
          width={420}
          height={760}
          alt="Logo Ana"
          className="opacity-70"
        />
        <h1 className="text-9xl font-quicksand whitespace-nowrap md:flex hidden">
          Ana Beatriz
        </h1>
      </div>
      <div className="flex flex-col md:flex-row md:w-2/3 gap-8">
        <div className="flex flex-col  text-center md:w-1/2 gap-2 ">
          <h1 className="font-quicksand text-5xl tracking-wider">Um site que deixa</h1>
          <h1 className="font-petit_formal_script text-3xl tracking-wider">
            uma impressão duradoura!
          </h1>
        </div>
        <div className="flex flex-col gap-8 md:w-1/2 text-center ">
          <p className="font-quicksand  text-xl tracking-wider">
            Olá, sou Ana Beatriz Sena - uma freelancer especializada em serviços
            premium de web design, desenvolvimento e SEO. Sou apaixonada por
            criar soluções únicas e eficazes para meus clientes e trago um toque
            pessoal a cada projeto. Vamos trabalhar juntos para dar vida à sua
            visão!
          </p>
          <div className="flex gap-2">
            <Icon className="text-xl">
              <PiGithubLogoLight />
            </Icon>
            <Icon className="text-xl">
              <PiLinkedinLogoLight />
            </Icon>
            <Icon className="text-xl">
              <PiInstagramLogoLight />
            </Icon>
            <Icon className="text-xl">
              <PiWhatsappLogoLight />
            </Icon>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
