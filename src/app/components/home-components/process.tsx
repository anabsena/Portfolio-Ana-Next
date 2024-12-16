import React from "react";
import Icon from "../Icon";
import { GoArrowDown } from "react-icons/go";
type CardProps = {
  content: string;
  number: string;
  title: string;
  stage: string;
  objectives: string;
  position: string;
};
const Process = () => {
  const timelineData = [
    {
      number: "01",
      stage: "Começo de tudo",
      title: "Coleta de requisitos",
      content:
        "Antes de começarmos, determinamos se e como posso ajudar você. Quais são seus requisitos para seu novo site? Por que você precisa de um novo site? Quais são seus objetivos e quais problemas podemos resolver com um novo site?",
      objectives:
        "Consigo te conhecer melhor+Determinar qual o melhor método para te ajudar+Entender quais são seus objetivos para o site",
      position: "right",
    },
    {
      number: "02",
      stage: "Planejamento",
      title: "Conceito e estratégia",
      content:
        "Juntos, desenvolvemos uma estratégia que combina com sucesso seus objetivos com as necessidades do seu público-alvo. Com base nesse conceito, crio os primeiros wireframes e um protótipo interativo. Isso nos dá uma ótima impressão do site e da interface do usuário.",
      objectives: "UX Design+Wireframes+Portotipo interativo",
      position: "left",
    },
    {
      number: "03",
      stage: "Hora da mágica",
      title: "web Design",
      content:
        "Agora vem a mágica. Com base no conceito desenvolvido anteriormente, eu crio um design de tela de alta qualidade perfeitamente adaptado à sua marca. Um web design que o diferencia da concorrência, se adapta perfeitamente ao seu público-alvo e fornece uma excelente experiência do usuário.",
      objectives:
        "Design de web de alta qualidade adaptado à sua marca+Protótipo interativo do design",
      position: "right",
    },
    {
      number: "04",
      stage: "Mais magica",
      title: "Desenvolvimento",
      content:
        "Nesta etapa, onde tudo ganha vida, o design agora vai para o ar, e seu site logo estará disponível na internet te destacando da sua concorrência. Com animações incríveis e estratégias de SEO que fazem seu site ficar no topo.",
      objectives:
        "Site personalizado+Pensado em todas as animações necessárias+Estratégias de SEO",
      position: "left",
    },
    {
      number: "05",
      stage: "Prontinho",
      title: "Site no ar",
      content:
        "Agora só manter tudo rodando e deixar o site fazer sua mágica, trazendo novos clientes e te deixando cada vez mais reconhecido neste mundo que é tão grande! Te darei todo o suporte quando precisar!",
      position: "right",
    },
  ];

  const ComponentCard: React.FC<CardProps> = ({
    number,
    stage,
    title,
    content,
    objectives,
    position,
  }) => {
    const cardContent = (
      <div
        className={`bg-details/5 border border-primary/15 md:p-12 p-8 max-w-[560px] flex flex-col gap-6 transition-opacity duration-500 mt-4 md:mt-0`}
      >
        <div className="flex flex-col gap-1">
          <span className="text-xs font-bold opacity-70 font-quicksand tracking-wider uppercase">
            {stage}
          </span>
          <h3 className="font-satoshi text-lg md:text-xl tracking-wider uppercase">
            {title}
          </h3>
        </div>
        <p className="md:text-md text-sm font-quicksand">{content}</p>
        {objectives && (
          <ul className="list-disc pl-5 md:text-md text-sm font-quicksand flex flex-col gap-4">
            {objectives.split("+").map((objective, index) => (
              <li key={index}>{objective}</li>
            ))}
          </ul>
        )}
      </div>
    );
  
    return (
      <div className="flex items-center gap-8 w-full relative md:justify-center justify-start">
        <div
          className={`hidden md:block ${position === "left" ? "w-1/2" : "invisible w-1/2"}`}
        >
          {cardContent}
        </div>
        
        <div className="h-full w-[0.2px] bg-details/15 rounded-full absolute z-10 ml-4"></div>
  
        <div className="bg-primary py-4 z-20">
          <Icon>{number}</Icon>
        </div>
  
        <div
          className={`hidden md:block ${position === "right" ? "w-1/2" : "invisible w-1/2"}`}
        >
          {cardContent}
        </div>
  
        <div className="md:hidden w-full">
          <div
            className={`flex ${position === "left" ? "justify-start" : "justify-end"}`}
          >
            {cardContent}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col justify-center items-center gap-4 md:gap-8 md:px-56 px-4">
      <h1 className="font-quicksand uppercase font-bold text-sm">O processo</h1>
      <h1
        className="font-satoshi text-5xl md:text-8xl font-light
      "
      >
        Seu Website
      </h1>
      <h1 className="font-petit_formal_script text-4xl md:text-6xl font-light opacity-90">
        em 5 passos
      </h1>
      <p className="text-lg md:text-2xl text-center md:w-1/4 font-light font-quicksand opacity-90">
        O processo que funciona, deixando seu site customizado ao que você
        precisa.
      </p>
      <div className="flex flex-col md:items-center ">
        <div className="mb-4">
          <Icon>
            <GoArrowDown />
          </Icon>
        </div>
        {timelineData.map((card) => (
          <ComponentCard
            {...card}
            key={card.number}
            content={card.content}
            number={card.number}
            objectives={card.objectives ? card.objectives : ""}
            position={card.position}
            stage={card.stage}
            title={card.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Process;
