"use client";
import Icon from "@/app/components/Icon";
import { collection, getDocs } from "firebase/firestore";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { GoArrowDown } from "react-icons/go";
import { db } from "@/firebase/firebase";

type Props = {
  params: Promise<{ id: string }>;
};

const Page = ({ params }: Props) => {
  const [project, setProject] = useState<any>(null);

  const fetchProject = async (id: string) => {
    try {
      const querySnapshot = await getDocs(collection(db, "projects"));
      const projectsList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      const selectedProject = projectsList.find((p) => p.id === id);
      setProject(selectedProject);
    } catch (error) {
      console.error(
        "                                                                                    Erro ao buscar projeto:",
        error
      );
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Resolva a promessa antes de acessar "id"
        const resolvedParams = await params;
        if (resolvedParams?.id) {
          await fetchProject(resolvedParams.id);
        }
      } catch (error) {
        console.error("Failed to fetch project:", error);
      }
    };

    fetchData();
  }, [params]);
  if (!project) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="mt-32 flex flex-col items-center gap-8">
      <h1 className="md:text-9xl text-8xl font-quicksand">{project.name}</h1>
      <p className="font-quicksand text-2xl tracking-wider opacity-70 ">
        {project.description}
      </p>
      <div className="flex gap-4 w-1/2">
        <div className="bg-details/5 p-4 border border-primary/15 rounded-sm shadow-lg w-full">
          <h1 className="text-xs uppercase md:text-sm font-bold opacity-70 font-quicksand tracking-wider">
            Cliente
          </h1>
          <h1 className="text-xs uppercase md:text-sm font-bold font-quicksand tracking-wider">
            {project.clientName}
          </h1>
        </div>
        <div className="bg-details/5 p-4 border border-primary/15 rounded-sm shadow-lg w-full">
          <h1 className="text-xs uppercase md:text-sm font-bold opacity-70 font-quicksand tracking-wider">
            Website
          </h1>
          <h1 className="text-xs uppercase md:text-sm font-bold font-quicksand tracking-wider">
            {project.websiteUrl}
          </h1>
        </div>
      </div>
      <Icon text="Mais detalhes">
        <GoArrowDown />
      </Icon>
      <div className="border border-primary/15 mt-16">
        <Image
          src={project.image || "/img/inicio-projetar-mais.png"} // Caso tenha imagem, exibe a do projeto, caso contrário, exibe uma padrão
          width={900}
          height={420}
          alt={project.name}
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
            <h1 className="md:text-2xl text-xl font-quicksand">Desafio</h1>
            <p className="font-quicksand text-xl tracking-wider opacity-70 w-3/4">
              {project.challenge}
            </p>
          </div>
          <div className="bg-details/5 p-8 border border-primary/15 rounded-sm shadow-lg w-full">
            <h1 className="md:text-2xl text-xl font-quicksand">Objetivo</h1>
            <p className="font-quicksand text-xl tracking-wider opacity-70 w-3/4">
              {project.goal}
            </p>
          </div>
          <div className="bg-details/5 p-8 border border-primary/15 rounded-sm shadow-lg w-full">
            <h1 className="md:text-2xl text-xl font-quicksand">Resultado</h1>
            <p className="font-quicksand text-xl tracking-wider opacity-70 w-3/4">
              {project.result}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
