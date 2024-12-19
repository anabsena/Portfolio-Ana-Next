"use client";

import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import Link from "next/link";
import { db } from "@/firebase/firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { HiDotsVertical } from "react-icons/hi";

const Page = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  const fetchProjects = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "projects"));
      const projectsList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      //@ts-ignore
      setProjects(projectsList);
    } catch (error) {
      console.error("Erro ao buscar projetos:", error);
    } finally {
      setIsLoading(false);
    }
  };
  //@ts-ignore
  const handleDelete = async (projectId) => {
    if (window.confirm("Tem certeza que deseja excluir este projeto?")) {
      try {
        await deleteDoc(doc(db, "projects", projectId));
        setProjects((prevProjects) =>
          // @ts-ignore
          prevProjects.filter((project) => project.id !== projectId)
        );
        alert("Projeto excluído com sucesso!");
      } catch (error) {
        console.error("Erro ao excluir projeto:", error);
        alert("Erro ao excluir o projeto.");
      }
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);
  

  return (
    <div className="mt-20 flex justify-center">
      <div className="w-full max-w-[1200px] flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Painel de Projetos</h1>
          <Link href="/private-projects/createproject">
            <Button variant="primary">Criar Novo Projeto</Button>
          </Link>
        </div>

        <div className="shadow-md rounded-sm p-4">
          <h2 className="text-lg font-semibold border-b border-primary/15 pb-4">
            Meus Projetos
          </h2>

          {isLoading ? (
            <p className="text-center mt-6">Carregando projetos...</p>
          ) : projects.length === 0 ? (
            <p className="text-center mt-6">
              Você ainda não tem projetos cadastrados.
            </p>
          ) : (
            <div className="mt-4 flex w-full gap-4">
              {projects.map((project) => (
                <div
                  // @ts-ignore
                  key={project.id}
                  className="border border-primary/15 bg-details/5 p-4 rounded-sm hover:shadow-lg transition-shadow duration-200 flex justify-between w-full"
                >
                  <h3 className="text-xl font-semibold capitalize mb-4">
                    {/* @ts-ignore */}
                    {project.name}
                  </h3>
                  <div className="relative">
                    <HiDotsVertical
                      onClick={toggleMenu}
                      className="text-xl cursor-pointer"
                    />
                    {isMenuOpen && (
                      <div className="absolute top-0 right-0 mt-2 p-4 border border-primary/15 bg-details/5 shadow-lg rounded-sm">
                        <Link
                          //@ts-ignore
                          href={`/private-projects/editproject/${project.id}`}
                          passHref
                        >
                          <button
                            className="block text-sm p-2"
                            onClick={closeMenu}
                          >
                            Editar
                          </button>
                        </Link>
                        <button
                          className="block text-sm  p-2 w-full text-left"
                          onClick={() => {
                            //@ts-ignore
                            handleDelete(project.id);
                            closeMenu();
                          }}
                        >
                          Excluir
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
