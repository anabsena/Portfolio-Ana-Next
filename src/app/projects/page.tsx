"use client";
import React, { useState, useEffect } from "react";
import Icon from "../components/Icon";
import { GoArrowUpRight } from "react-icons/go";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/firebase";

// Definindo a tipagem para o projeto
interface Project {
  id: string;
  name: string;
  services: string;
  imageBase: string;
}

const SkeletonCard = () => {
  return (
    <div className="border border-primary/15 relative rounded-sm shadow-lg h-[400px] animate-pulse">
      <div className="absolute inset-0 bg-gray-300/50 opacity-50 w-full"></div>
      <div className="w-full h-full flex flex-col justify-end p-4">
        <div className="rounded-sm w-full p-4 bg-gray-300/50 border border-primary/15 backdrop-blur-sm flex justify-between items-center">
          <div className="bg-gray-200/50 h-6 w-1/2 rounded"></div>
          <div className="bg-gray-200/50 h-4 w-1/4 rounded mt-2"></div>
        </div>
      </div>
    </div>
  );
};

const Page = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchProjects = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "projects"));
      const projectsList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        name: doc.data().name,
        services: doc.data().services || "", 
        imageBase: doc.data().imageBase || "", 
      }));
      setProjects(projectsList);
      setIsLoading(false);
    } catch (error) {
      console.error("Erro ao buscar projetos:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // Tipando as props do ProjectCard
  const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    return (
      <div className="border border-primary/15 relative rounded-sm shadow-lg h-[400px]">
        <div
          className="absolute inset-0 bg-cover opacity-50 w-full"
          style={{
            backgroundImage: `url(${project.imageBase})`,
          }}
        ></div>

        <a
          href={`/projects/${project.id}`}
          className="absolute w-full h-full opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center"
        >
          <Icon className="bg-primary/15 backdrop-blur-sm">
            <GoArrowUpRight />
          </Icon>
        </a>

        <div className="w-full h-full flex flex-col justify-end p-4">
          <div className="rounded-sm w-full p-4 bg-primary/40 border border-primary/15 backdrop-blur-sm flex justify-between items-center">
            <h2 className="text-primary text-2xl font-bold font-quicksand capitalize">
              {project.name}
            </h2>
            <p className="text-sm text-primary/80 font-quicksand tracking-widest uppercase">
              {project.services}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="mt-32 w-full flex flex-col items-center text-center gap-4">
      <h1 className="md:text-9xl text-8xl font-quicksand">Trabalhos feitos</h1>
      <p className="font-quicksand text-2xl tracking-wider opacity-70 ">
        Meus últimos projetos de web design e veja como posso ajudar a dar vida
        às suas ideias.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:w-3/4">
        {isLoading
          ? Array.from({ length: 4 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          : projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
      </div>
    </div>
  );
};

export default Page;
