"use client";

import Button from "@/app/components/Button";
import { db } from "@/firebase/firebase";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { HiOutlineChevronDoubleLeft } from "react-icons/hi";
import Link from "next/link";
import { AiOutlineDelete, AiOutlinePlus } from "react-icons/ai";
import Icon from "@/app/components/Icon";

const Page = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [technologies, setTechnologies] = useState<string[]>([]);
  const router = useRouter();
  const validationSchema = Yup.object({
    name: Yup.string().required("Nome do projeto é obrigatório"),
    services: Yup.string().required("Serviços são obrigatórios"),
    description: Yup.string().required("Descrição é obrigatória"),
    accessLink: Yup.string()
      .url("Link de acesso inválido")
      .required("Link de acesso é obrigatório"),
    challenges: Yup.string().required("Desafios são obrigatórios"),
    objectives: Yup.string().required("Objetivos são obrigatórios"),
    results: Yup.string().required("Resultados são obrigatórios"),
    clientName: Yup.string().required("Nome do cliente é obrigatório"),
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file); 
    }
  };

  const handleSubmit = async (values: any) => {
    try {
      await addDoc(collection(db, "projects"), {
        ...values,
        imageBase: imagePreview,
        tecsUseds: technologies,
        createdAt: serverTimestamp(),
      });

      alert("Projeto postado com sucesso!");
      router.push("/private-projects");
    } catch (error) {
      console.error("Erro ao postar projeto:", error);
      alert("Ocorreu um erro ao postar o projeto.");
    }
  };
  const handleAddTechnology = () => {
    setTechnologies([...technologies, ""]);
  };

  const handleRemoveTechnology = (index: number) => {
    const updatedTechnologies = technologies.filter((_, i) => i !== index);
    setTechnologies(updatedTechnologies);
  };

  const handleTechnologyChange = (index: number, value: string) => {
    const updatedTechnologies = [...technologies];
    updatedTechnologies[index] = value;
    setTechnologies(updatedTechnologies);
  };
  return (
    <div className="flex flex-col min-h-screen w-full items-center justify-center  p-4">
      <div className="w-full border border-primary/40 p-8 rounded-lg shadow-md max-w-[1200px] flex flex-col gap-4">
        <div className="flex">

        <Link href="/private-projects">
          <Button className="flex justify-center items-center gap-4">
            <HiOutlineChevronDoubleLeft /> Voltar
          </Button>
        </Link>
        </div>
        <h2 className="text-3xl font-bold mb-6">Cadastrar Projeto</h2>
        <Formik
          initialValues={{
            name: "",
            services: "",
            accessLink: "",
            challenges: "",
            objectives: "",
            results: "",
            clientName: "",
            description:"",
            tecsUseds: technologies,
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="block font-medium">
                    Nome do Projeto:
                  </label>
                  <Field
                    name="name"
                    className={`w-full p-3 border rounded-sm bg-transparent ${
                      errors.name && touched.name
                        ? "border-red-500"
                        : "border-primary/40"
                    }`}
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="services" className="block font-medium">
                    Serviços:
                  </label>
                  <Field
                    name="services"
                    className={`w-full p-3 border rounded-sm bg-transparent ${
                      errors.services && touched.services
                        ? "border-red-500"
                        : "border-primary/40"
                    }`}
                  />
                  <ErrorMessage
                    name="services"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="accessLink" className="block font-medium">
                    Link de Acesso:
                  </label>
                  <Field
                    name="accessLink"
                    type="url"
                    className={`w-full p-3 border rounded-sm bg-transparent ${
                      errors.accessLink && touched.accessLink
                        ? "border-red-500"
                        : "border-primary/40"
                    }`}
                  />
                  <ErrorMessage
                    name="accessLink"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="clientName" className="block font-medium">
                    Nome do Cliente:
                  </label>
                  <Field
                    name="clientName"
                    className={`w-full p-3 border rounded-sm bg-transparent ${
                      errors.clientName && touched.clientName
                        ? "border-red-500"
                        : "border-primary/40"
                    }`}
                  />
                  <ErrorMessage
                    name="clientName"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="description" className="block font-medium">
                  Descrição:
                </label>
                <Field
                  as="textarea"
                  name="description"
                  rows={4}
                  className={`w-full p-3 border rounded-sm bg-transparent ${
                    errors.description && touched.description
                      ? "border-red-500"
                      : "border-primary/40"
                  }`}
                />
                <ErrorMessage
                  name="challenges"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="challenges" className="block font-medium">
                  Desafios:
                </label>
                <Field
                  as="textarea"
                  name="challenges"
                  rows={4}
                  className={`w-full p-3 border rounded-sm bg-transparent ${
                    errors.challenges && touched.challenges
                      ? "border-red-500"
                      : "border-primary/40"
                  }`}
                />
                <ErrorMessage
                  name="challenges"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="objectives" className="block font-medium">
                  Objetivos:
                </label>
                <Field
                  as="textarea"
                  name="objectives"
                  rows={4}
                  className={`w-full p-3 border rounded-sm bg-transparent ${
                    errors.objectives && touched.objectives
                      ? "border-red-500"
                      : "border-primary/40"
                  }`}
                />
                <ErrorMessage
                  name="objectives"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="results" className="block font-medium">
                  Resultados:
                </label>
                <Field
                  as="textarea"
                  name="results"
                  rows={4}
                  className={`w-full p-3 border rounded-sm bg-transparent ${
                    errors.results && touched.results
                      ? "border-red-500"
                      : "border-primary/40"
                  }`}
                />
                <ErrorMessage
                  name="results"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">

                <label htmlFor="tecsUseds" className="block font-medium">
                  Tecnologias Utilizadas:
                </label>
                <Icon onClick={handleAddTechnology}> <AiOutlinePlus /></Icon>
                </div>
                {technologies.map((technology, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <input
                      type="text"
                      value={technology}
                      onChange={(e) => handleTechnologyChange(index, e.target.value)}
                      className="w-full p-3 border rounded-sm bg-transparent border-primary/40"
                    />
                    <Icon onClick={() => handleRemoveTechnology(index)}> <AiOutlineDelete /></Icon>
                   
                  </div>
                ))}
                 
               
                <ErrorMessage
                  name="tecsUseds"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="imageBase" className="block font-medium">
                  Imagem do Projeto:
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="w-full p-3 border rounded-sm bg-transparent border-primary/40"
                />
                {imagePreview && (
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="mt-4 w-32 h-32 object-cover rounded-sm bg-transparent shadow"
                  />
                )}
              </div>
              <div className="flex justify-end">
                <Button disabled={isSubmitting} type="submit">
                  {isSubmitting ? "Carregando..." : "Postar Projeto"}
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Page;
