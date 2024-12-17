import Icon from "@/app/components/Icon";
import Image from "next/image";
import React from "react";
import { GoArrowDown } from "react-icons/go";

type Props = {
  params: {
    id: string;
  };
};
const Page = ({ params }: Props) => {
  return (
    <div className="mt-32 flex flex-col items-center gap-8">
      <h1 className="md:text-9xl text-8xl font-quicksand">Nome projeto</h1>
      <p className="font-quicksand text-2xl tracking-wider opacity-70 ">
        Descrição do projeto
      </p>
      <div className="flex gap-4 w-1/2">
        <div className="bg-details/5 p-4 border border-primary/15 rounded-sm shadow-lg w-full">
          <h1 className="text-xs uppercase md:text-sm font-bold opacity-70 font-quicksand tracking-wider">
            Cliente
          </h1>
          <h1 className="text-xs uppercase md:text-sm font-bold  font-quicksand tracking-wider">
            Nome Cliente
          </h1>
        </div>
        <div className="bg-details/5 p-4 border border-primary/15 rounded-sm shadow-lg w-full">
          <h1 className="text-xs uppercase md:text-sm font-bold opacity-70 font-quicksand tracking-wider">
            Website
          </h1>
          <h1 className="text-xs uppercase md:text-sm font-bold  font-quicksand tracking-wider">
            Linck do site
          </h1>
        </div>
      </div>
      <Icon text="Mais detalhes">
        <GoArrowDown />
      </Icon>
      <div className="border border-primary/15  mt-16">
        <Image
          src="/img/inicio-projetar-mais.png"
          width={900}
          height={420}
          alt="Logo Ana"
          className="opacity-70"
        />
      </div>
      <div className="flex gap-4 w-2/3">
        <div className="sticky top-8 h-fit flex flex-col gap-4">
          <h1 className="text-xs uppercase md:text-sm font-bold opacity-70 font-quicksand tracking-wider">
            Serviços
          </h1>
          <h1 className="md:text-4xl text-4xl font-quicksand">
            Web design, desenvolvimento com programação
          </h1>
          <h1 className="text-xs uppercase md:text-sm font-bold opacity-70 font-quicksand tracking-wider">
            Tecnologias utilizadas
          </h1>
        </div>
        <div className="flex flex-col gap-4">

        <div className="bg-details/5 p-8 border border-primary/15 rounded-sm shadow-lg w-full">
          <h1 className="md:text-2xl text-xl font-quicksand">
            Desafio
          </h1>
          <p className="font-quicksand text-xl tracking-wider opacity-70 w-3/4">
            Impulsionando sua empresa através do digital, com sites que
            convertem.
          </p>
        </div>
        <div className="bg-details/5 p-8 border border-primary/15 rounded-sm shadow-lg w-full">
          <h1 className="md:text-2xl text-xl font-quicksand">
            Objetivo
          </h1>
          <p className="font-quicksand text-xl tracking-wider opacity-70 w-3/4">
            Impulsionando sua empresa através do digital, com sites que
            convertem.
          </p>
        </div>
        <div className="bg-details/5 p-8 border border-primary/15 rounded-sm shadow-lg w-full">
          <h1 className="md:text-2xl text-xl font-quicksand">
            Resultado
          </h1>
          <p className="font-quicksand text-xl tracking-wider opacity-70 w-3/4">
            Impulsionando sua empresa através do digital, com sites que
            convertem.
          </p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
