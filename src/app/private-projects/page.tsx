"use client";

import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import Link from "next/link";
import { db } from "@/firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

const Page = () => {
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "projects"));
      const projectsList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      //@ts-ignore
      setProjects(projectsList);
      console.log(projectsList)
    } catch (error) {
      console.error("Erro ao buscar projetos:", error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="mt-32">
      <Link href="/private-projects/createproject">
        <Button variant="secondary">Criar novo projeto</Button>
      </Link>

      <div className="bg-details/5 border border-primary/15 p-4 flex flex-col items-center gap-8 mt-12 rounded-sm shadow-lg w-full ">
        <h2 className="text-xl font-bold uppercase font-quicksand">
          Meus Projetos
        </h2>
        {projects.length === 0 ? (
          <p>Você ainda não tem projetos cadastrados.</p>
        ) : (
          <ul className="mt-4">
            {projects.map((project) => (
              <div className="border-t border-primary/15">
                <h1 className="text-xs uppercase md:text-sm font-bold opacity-70 font-quicksand tracking-wider">
                  {/* @ts-ignore */}
                  {project.name}
                </h1>
              </div>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Page;
