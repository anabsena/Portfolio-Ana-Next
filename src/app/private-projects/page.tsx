"use client";
import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import Link from "next/link";
import { db } from "@/firebase/firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { HiDotsVertical } from "react-icons/hi";
import Message from "../components/Message";
import ConfirmModal from "../components/ConfirmModal";
interface Project {
  id: string;
  name: string;
}
const Page = () => {
  const [projects, setProjects] = useState<Project[] | undefined>();
  const [isLoading, setIsLoading] = useState(true);
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const [message, setMessage] = useState<{
    text: string;
    type: "success" | "error";
  } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
    null
  );

  const toggleMenu = (projectId: string) => {
    setOpenMenuId((prevState) => (prevState === projectId ? null : projectId));
  };

  const closeMenu = () => {
    setOpenMenuId(null);
  };

  const fetchProjects = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "projects"));
      const projectsList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        name: doc.data().name,
      }));
      setProjects(projectsList);
    } catch (error) {
      console.error("Erro ao buscar projetos:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async () => {
    if (selectedProjectId) {
      try {
        await deleteDoc(doc(db, "projects", selectedProjectId));
        setProjects(
          (prevProjects) =>
            prevProjects &&
            prevProjects.filter((project) => project.id !== selectedProjectId)
        );
        setMessage({ text: "Projeto excluído com sucesso!", type: "success" });
      } catch (error) {
        console.error("Erro ao excluir projeto:", error);
        setMessage({ text: "Erro ao excluir o projeto.", type: "error" });
      } finally {
        setIsModalOpen(false);
        setSelectedProjectId(null);
      }
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="mt-20 flex justify-center min-h-screen">
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
          ) : projects && projects.length === 0 ? (
            <p className="text-center mt-6">
              Você ainda não tem projetos cadastrados.
            </p>
          ) : (
            <div className="mt-4 flex w-full gap-4 flex-col">
              {projects &&
                projects.map((project) => (
                  <div
                    key={project.id}
                    className="border border-primary/15 bg-details/5 p-4 rounded-sm hover:shadow-lg transition-shadow duration-200 flex justify-between w-full"
                  >
                    <h3 className="text-xl font-semibold capitalize mb-4">
                      {project.name}
                    </h3>
                    <div className="relative">
                      <HiDotsVertical
                        onClick={() => toggleMenu(project.id)}
                        className="text-xl cursor-pointer"
                      />
                      {openMenuId === project.id && (
                        <div className="absolute top-0 right-0 mt-2 px-4 border border-primary/15 bg-details/5 shadow-lg rounded-sm">
                          <Link
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
                          <hr className="border-primary/15" />
                          <button
                            className="block text-sm  p-2 w-full text-left"
                            onClick={() => {
                              setSelectedProjectId(project.id);
                              setIsModalOpen(true);
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

      {message && (
        <Message
          message={message.text}
          type={message.type}
          onClose={() => setMessage(null)}
        />
      )}

      <ConfirmModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleDelete}
        message="Tem certeza que deseja excluir este projeto?"
      />
    </div>
  );
};

export default Page;
