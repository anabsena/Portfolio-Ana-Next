import Image from "next/image";
import React from "react";
import Icon from "../components/Icon";
import { GoArrowDown } from "react-icons/go";

type CardProps = {
  children: React.ReactNode;
  onClick?: () => void;
  number: string;
  title: string;
};

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-8 px-4">
      <div className="text-center min-h-screen flex flex-col justify-center items-center gap-8">
        <h1 className="font-satoshi text-5xl md:text-9xl font-light mb-4">
          Web Design
        </h1>
        <p className="text-xl md:text-2xl font-light font-quicksand opacity-90 max-w-2xl mx-auto">
          Serviços premium de design, desenvolvimento e SEO para ajudar sua
          empresa a se destacar.
        </p>
        <Image
          src="/img/web-design-tab.png"
          width={500}
          height={760}
          alt="Logo ana"
          className="opacity-70 mt-6"
        />

        <Icon text="Meus serviços">
          <GoArrowDown />
        </Icon>
      </div>

      <div className="bg-details/5 border border-primary/15 p-4 flex flex-col items-center gap-8 mt-12 rounded-lg shadow-lg w-full md:w-2/3 ">
        <h1 className="text-xs uppercase md:text-sm font-bold opacity-70 font-quicksand tracking-wider">
          Web Design
        </h1>
        <h1 className="text-3xl md:text-6xl font-quicksand w-full text-center">
          Transformando suas ideias em realidade
        </h1>
        <div className="h-[0.2px] w-full bg-details/15 rounded-full my-4"></div>

        <div className="w-full flex flex-col gap-4">
          <div className="flex flex-col md:flex-row justify-between items-start p-6 gap-4">
            <h1 className="font-satoshi text-sm opacity-70 uppercase font-bold tracking-wider">
              Requisitos
            </h1>
            <p className="font-quicksand text-sm md:text-base w-2/3">
              Preciso coletar os requisitos do seu site, ou seja, vou conversar
              com você para analisar quais são seus objetivos e tudo que espera,
              para que saia perfeito.
            </p>
          </div>
          <div className="h-[0.2px] w-full bg-details/15 rounded-full my-4"></div>

          <div className="flex flex-col md:flex-row justify-between items-start p-6 gap-4">
            <h1 className="font-satoshi text-sm opacity-70 uppercase font-bold tracking-wider">
              UX / UI Design
            </h1>
            <p className="font-quicksand text-sm md:text-base w-2/3">
              Irei criar uma interface criativa e intuitiva, onde vamos
              considerar sua marca em todos os momentos no site, e você poderá
              aprovar antes do desenvolvimento. É onde toda a mágica acontece.
            </p>
          </div>
          <div className="h-[0.2px] w-full bg-details/15 rounded-full my-4"></div>

          <div className="flex flex-col md:flex-row justify-between items-start p-6 gap-4">
            <h1 className="font-satoshi text-sm opacity-70 uppercase font-bold tracking-wider">
              Protótipo
            </h1>
            <p className="font-quicksand text-sm md:text-base w-2/3">
              Com um protótipo interativo, você terá a capacidade de testar a
              funcionalidade do seu site antes de ele ir ao ar. Isso garantirá
              que o design do seu site e a experiência do usuário sejam
              otimizados para as necessidades e preferências do seu público.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-details/5 border border-primary/15 p-4 flex flex-col items-center gap-8 mt-12 rounded-lg shadow-lg w-full md:w-2/3">
        <h1 className="text-xs uppercase md:text-sm font-bold opacity-70 font-quicksand tracking-wider">
          Desenvolvimento
        </h1>
        <h1 className="text-3xl md:text-6xl font-quicksand w-full text-center ">
          Desenvolvendo site de alto desempenho
        </h1>
        <div className="h-[0.2px] w-full bg-details/15 rounded-full my-4"></div>

        <div className="w-full flex flex-col gap-4">
          <div className="flex flex-col md:flex-row justify-between items-start p-6 gap-4">
            <h1 className="font-satoshi text-sm opacity-70 uppercase font-bold tracking-wider">
              Programação
            </h1>
            <p className="font-quicksand text-sm md:text-base w-2/3">
              Desenvolvedora front-end, amo os códigos e posso fazer o seu site
              totalmente com programação e coloca-lo no ar com desempenho
              incrivel.
            </p>
          </div>
          <div className="h-[0.2px] w-full bg-details/15 rounded-full my-4"></div>

          <div className="flex flex-col md:flex-row justify-between items-start p-6 gap-4">
            <h1 className="font-satoshi text-sm opacity-70 uppercase font-bold tracking-wider">
              Framer, Wordpress e wix
            </h1>
            <p className="font-quicksand text-sm md:text-base w-2/3">
              Posso também desenvolver seu site em plataformas como Framer,
              Wordpress e Wix, de maneira rápida e ágil, deixando prontinho para
              você e ensinar pequenas modificações.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
