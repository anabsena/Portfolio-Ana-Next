import React from "react";
import Icon from "../Icon";
import { GoArrowUpRight } from "react-icons/go";
type CardProps = {
  children: React.ReactNode;
  onClick?: () => void;
  number: string;
  title: string
};
const Services = () => {
  const ComponentCard: React.FC<CardProps> = ({ number, title, children, onClick }) => {
    return (
      <div className="bg-details/5 border border-primary/15 p-8 md:p-12 w-full">
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

  return (
    <div className="flex flex-col md:flex-row w-full gap-4 md:px-56 px-4">
      <ComponentCard number="01" title="Web Design">
        Design bem pensado para ser bonito e cativante ao mesmo tempo que
        converte seus clientes para compra do seu serviço
      </ComponentCard>
      <ComponentCard number="02" title="Desenvolvimento">
        Aqui tudo é possível, tenha seu site com programação ou em wordPress e
        Wix, sempre o que se encaixar para seu negócio
      </ComponentCard>
      <ComponentCard number="03" title="Content & SEO">
        Seu conteúdo irá ficar em ótimos resultados de pesquisa,com estratégias
        para melhorar o desempenho do seu site
      </ComponentCard>
    </div>
  );
};

export default Services;
