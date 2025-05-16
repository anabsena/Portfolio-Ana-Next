import Image from "next/image";
import React from "react";
import Icon from "../Icon";
import { GoArrowDown } from "react-icons/go";

const Initial = () => {
  return (
    <div className="flex flex-col items-center gap-4 mt-8">
      <Image
        src="/img/ana-arte.png"
        width={450}
        height={760}
        alt="Logo ana"
        className="opacity-70 circular-float-animation"
      />
      <h1 className="font-satoshi text-5xl md:text-9xl font-light">
        Web designer
      </h1>
      <h1 className="font-petit_formal_script text-4xl md:text-8xl font-light opacity-90">
        & Developer
      </h1>
      <div className="flex flex-col gap-12 text-center items-center">
        <p className="text-xl md:text-2xl text-center md:w-1/2 font-light font-quicksand opacity-90">
          Ajudo sua empresa a se destacar no mercado com um site bonito, bem
          pensado para converter.
        </p>
        <div className="w-full mt-8 overflow-x-auto md:overflow-hidden">
  <div className="flex gap-8 px-4 md:justify-center md:animate-scroll md:w-fit">
            <img src="/img/icons/html.png" alt="HTML" className="w-16 h-16" />
            <img src="/img/icons/css.png" alt="CSS" className="w-16 h-16" />
            <img src="/img/icons/react.png" alt="React" className="w-16 h-16" />
            <img
              src="/img/icons/next.png"
              alt="Next.js"
              className="w-16 h-16"
            />
            <img
              src="/img/icons/prisma.png"
              alt="Prisma"
              className="w-16 h-16"
            />
            <img
              src="/img/icons/swagger.png"
              alt="Swagger"
              className="w-16 h-16"
            />
            <img
              src="/img/icons/tailwind.png"
              alt="Tailwind CSS"
              className="w-16 h-16"
            />
            <img
              src="/img/icons/mui.png"
              alt="Material-UI"
              className="w-16 h-16"
            />
            <img src="/img/icons/figma.png" alt="Figma" className="w-16 h-16" />
            <img src="/img/icons/nest.png" alt="NestJS" className="w-16 h-16" />
            <img src="/img/icons/html.png" alt="HTML" className="w-16 h-16" />
            <img src="/img/icons/css.png" alt="CSS" className="w-16 h-16" />
            <img src="/img/icons/react.png" alt="React" className="w-16 h-16" />
            <img
              src="/img/icons/next.png"
              alt="Next.js"
              className="w-16 h-16"
            />
            <img
              src="/img/icons/prisma.png"
              alt="Prisma"
              className="w-16 h-16"
            />
            <img
              src="/img/icons/swagger.png"
              alt="Swagger"
              className="w-16 h-16"
            />
            <img
              src="/img/icons/tailwind.png"
              alt="Tailwind CSS"
              className="w-16 h-16"
            />
            <img
              src="/img/icons/mui.png"
              alt="Material-UI"
              className="w-16 h-16"
            />
            <img src="/img/icons/figma.png" alt="Figma" className="w-16 h-16" />
            <img src="/img/icons/nest.png" alt="NestJS" className="w-16 h-16" />
          </div>
        </div>
        <Icon text="Meus serviços">
          <GoArrowDown />
        </Icon>
      </div>
    </div>
  );
};

export default Initial;
