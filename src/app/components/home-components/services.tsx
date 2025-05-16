import React from "react";
import Icon from "../Icon";
import { GoArrowUpRight } from "react-icons/go";
import { CgWebsite } from "react-icons/cg";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { LuRefreshCcw } from "react-icons/lu";
import { FaRegFolderOpen } from "react-icons/fa6";
import { RiShoppingCartLine } from "react-icons/ri";
type CardProps = {
  children: React.ReactNode;
  onClick?: () => void;
  number: string;
  title: string;
};
const Services = () => {
  const ComponentCard: React.FC<CardProps> = ({
    number,
    title,
    children,
    onClick,
  }) => {
    return (
      <div className="bg-details/5 border border-primary/15 p-8 xl:p-12 w-full">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <span className=" text-xs md:text-sm font-bold opacity-70 font-quicksand tracking-wider">
              {number}
            </span>
            <h3 className="font-satoshi text-lg md:text-xl tracking-wider uppercase">
              {title}
            </h3>
          </div>
          <p className=" text-sm md:text-lg font-quicksand">{children}</p>
          <Icon text="Meus serviços">
            <GoArrowUpRight />
          </Icon>
        </div>
      </div>
    );
  };
  const cardData = [
    {
      icon: <CgWebsite size={40} />,
      title: "Landing Page",
      description:
        "Sites de uma única página focados em apresentar produtos ou serviços, ideais para campanhas e conversões rápidas.",
    },
    {
      icon: <HiOutlineBuildingOffice2 size={40} />,
      title: "Site Institucional Fixo",
      description:
        "Um site profissional com conteúdo estático para apresentar informações sobre sua empresa, produtos ou serviços de forma objetiva e confiável.",
    },
    {
      icon: <LuRefreshCcw size={40} />,
      title: "Site Institucional Dinâmico",
      description:
        "Um site com backend para permitir que o cliente gerencie seu conteúdo, como adicionar novos projetos, notícias ou serviços com facilidade.",
    },
    {
      icon: <FaRegFolderOpen size={40} />,
      title: "Portfólio Personalizado",
      description:
        "Sites desenvolvidos para profissionais ou empresas que desejam exibir seus trabalhos de maneira organizada e impressionante.",
    },
    {
      icon: <RiShoppingCartLine size={40} />,
      title: "Web Design para E-commerce",
      description:
        "Planejamento visual completo para lojas online, incluindo layout e identidade visual no Figma, garantindo um design funcional e atrativo para conversão de vendas.",
    },
  ];

  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col md:flex-row w-full gap-4 xl:px-56 px-24">
        <ComponentCard number="01" title="Web Design">
          Design bem pensado para ser bonito e cativante ao mesmo tempo que
          converte seus clientes para compra do seu serviço ou produto.
        </ComponentCard>
        <ComponentCard number="02" title="Desenvolvimento">
          Aqui tudo é possível: tenha seu site programado do zero ou em
          WordPress, sempre adaptado às necessidades do seu negócio.
        </ComponentCard>
        <ComponentCard number="03" title="Soluções Personalizadas">
          Desenvolvimento de sistemas sob medida, integração de APIs e
          funcionalidades exclusivas para transformar suas ideias em realidade.
        </ComponentCard>
      </div>
      <div className="flex flex-col gap-8 xl:px-56 px-4">
        <h2 className="font-satoshi text-2xl md:text-4xl tracking-wider uppercase text-center">
          Tipos de Sites
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center gap-4 w-full sm:w-1/2 lg:w-1/4"
            >
              <div className="w-20 h-20 flex items-center justify-center bg-details/5 border border-primary/15 rounded-full">
                <span className="opacity-80">{card.icon}</span>
              </div>
              <h3 className="font-satoshi text-lg md:text-xl uppercase">
                {card.title}
              </h3>
              <p className="text-sm md:text-base font-quicksand opacity-70">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
