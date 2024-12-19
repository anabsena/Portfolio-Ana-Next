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
          pensado para converter e com ótima posição no ranqueamento.
        </p>
        <Icon text="Meus serviços">
          <GoArrowDown />
        </Icon>
      </div>
    </div>
  );
};

export default Initial;
