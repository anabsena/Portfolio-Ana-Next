"use client";
import React, {useState,useEffect} from "react";
import Icon from "../components/Icon";
import { GoArrowUpRight } from "react-icons/go";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase/firebase";



const Page = () => {
  const [projects, setProjects] = useState([]);
  
  const fetchProjects = async () => {
    try {
      console.log("oi")
      const querySnapshot = await getDocs(collection(db, "projects"));
      const projectsList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProjects(projectsList);
      console.log('id projeto',projectsList)
    } catch (error) {
      console.error("Erro ao buscar projetos:", error);
    }
  };
  
  useEffect(() => {
    fetchProjects();
  }, []);
  //@ts-ignore
  const ProjectCard = ({ project }) => {
    return (
      <div className="border border-primary/15 relative rounded-sm shadow-lg h-[400px] md:h-[400px] w-[700px] ">
        {/* <div
          className="absolute inset-0 bg-cover opacity-50 w-full"
          style={{ backgroundImage: `url(${project.image})` }}
        ></div> */}
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Page;
