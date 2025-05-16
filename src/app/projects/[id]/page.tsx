"use client";
import Icon from "@/app/components/Icon";
import { collection, getDocs } from "firebase/firestore";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { GoArrowDown } from "react-icons/go";
import { db } from "@/firebase/firebase";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
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
      console.error("Erro ao buscar projeto:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
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
    <div className="md:mt-32 mt-16 flex justify-center ">
      <div className="flex flex-col max-w-[1200px] items-center gap-8 text-center p-4 w-full">
        <h1 className="md:text-9xl lg:text-8xl text-5xl font-quicksand">{project.name}</h1>
        <p className="font-quicksand lg:text-2xl text-lg tracking-wider opacity-70 ">
          {project.description}
        </p>
        <div className="flex gap-4 flex-col sm:flex-row sm:w-1/2">
          <div className="bg-details/5 p-4 border border-primary/15 rounded-sm shadow-lg w-full">
            <h1 className="text-xs uppercase md:text-sm font-bold opacity-70 font-quicksand tracking-wider">
              Cliente
            </h1>
            <h1 className="text-xs uppercase md:text-sm font-bold font-quicksand tracking-wider">
              {project.clientName}
            </h1>
          </div>
          <a
            href={project.accessLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bg-details/5 p-4 border border-primary/15 rounded-sm shadow-lg w-full">
              <h1 className="text-xs uppercase md:text-sm font-bold opacity-70 font-quicksand tracking-wider">
                Website
              </h1>
              <h1 className="text-xs uppercase md:text-sm font-bold font-quicksand tracking-wider">
                {project.accessLink}
              </h1>
            </div>
          </a>
        </div>
        <Icon text="Mais detalhes">
          <GoArrowDown />
        </Icon>
        <div className="border border-primary/15 mt-16">
          <Image
            src={project.imageBase}
            width={900}
            height={420}
            alt={project.name}
            className="opacity-70"
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center text-start">
          <div className="sm:sticky top-8 h-fit flex flex-col gap-4">
            <h1 className="text-xs uppercase md:text-sm font-bold opacity-70 font-quicksand tracking-wider">
              Serviços
            </h1>
            <h1 className="sm:text-4xl text-2xl font-quicksand">
              {project.services}
            </h1>
            <h1 className="text-xs uppercase md:text-sm font-bold opacity-70 font-quicksand tracking-wider">
              Tecnologias utilizadas
            </h1>
            <h1 className="md:text-xl sm:text-4xl text-2xl font-quicksand opacity-70">
              {/* @ts-ignore */}
              {project.tecsUseds.map((tecnologies) => (
                <div className="flex items-center gap-4">
                  <MdOutlineKeyboardDoubleArrowRight /> {tecnologies}
                </div>
              ))}
            </h1>
          </div>
          <div className="flex flex-col gap-4  text-start">
            <div className="bg-details/5 p-8 border border-primary/15 rounded-sm shadow-lg w-full flex flex-col gap-2">
              <h1 className="md:text-2xl text-xl font-quicksand">Desafio</h1>
              <p className="font-quicksand sm:text-xl text-sm tracking-wider opacity-70 ">
                {project.challenges}
              </p>
            </div>
            <div className="bg-details/5 p-8 border border-primary/15 rounded-sm shadow-lg w-full flex flex-col gap-2">
              <h1 className="md:text-2xl text-xl font-quicksand">Objetivo</h1>
              <p className="font-quicksand sm:text-xl text-sm tracking-wider opacity-70">
                {project.objectives}
              </p>
            </div>
            <div className="bg-details/5 p-8 border border-primary/15 rounded-sm shadow-lg w-full flex flex-col gap-2">
              <h1 className="md:text-2xl text-xl font-quicksand">Resultado</h1>
              <p className="font-quicksand sm:text-xl text-sm tracking-wider opacity-70 ">
                {project.results}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
