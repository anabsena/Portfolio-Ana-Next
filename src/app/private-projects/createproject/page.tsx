"use client";

import Button from "@/app/components/Button";
import { db } from "@/firebase/firebase"; 
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; 

const Page = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Nome do projeto é obrigatório"),
    services: Yup.string().required("Serviços são obrigatórios"),
    accessLink: Yup.string()
      .url("Link de acesso inválido")
      .required("Link de acesso é obrigatório"),
    challenges: Yup.string().required("Desafios são obrigatórios"),
    objectives: Yup.string().required("Objetivos são obrigatórios"),
    results: Yup.string().required("Resultados são obrigatórios"),
    clientName: Yup.string().required("Nome do cliente é obrigatório"),
  });

  const handleSubmit = async (values) => {
    const { name, services, accessLink, challenges, objectives, results, clientName } = values;

    try {
      await addDoc(collection(db, "projects"), {
        name,
        services,
        accessLink,
        challenges,
        objectives,
        results,
        clientName,
        createdAt: serverTimestamp(),
      });

      alert("Projeto postado com sucesso!");
    } catch (error) {
      console.error("Erro ao postar projeto:", error);
      alert("Ocorreu um erro ao postar o projeto.");
    }
  };

  return (
    <div className="flex min-h-screen w-full min-w-[600px] items-center justify-center">
      <div className="w-full bg-details/5 border border-primary/15 p-8 rounded-sm shadow-lg flex flex-col gap-8">
        <h2 className="text-2xl font-bold font-satoshi uppercase">Cadastre-se</h2>
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
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form className="flex flex-col gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name">Nome do Projeto:</label>
                  <Field
                    name="name"
                    className={`w-full p-4 border rounded-sm bg-transparent ${
                      errors.name && touched.name
                        ? "border-red-500"
                        : "border-primary/15"
                    }`}
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
                <div>
                  <label htmlFor="description">Descrição do Projeto:</label>
                  <Field
                    name="description"
                    className={`w-full p-4 border rounded-sm bg-transparent ${
                      errors.description && touched.description
                        ? "border-red-500"
                        : "border-primary/15"
                    }`}
                  />
                  <ErrorMessage
                    name="description"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div>
                  <label htmlFor="services">Serviços:</label>
                  <Field
                    name="services"
                    className={`w-full p-4 border rounded-sm bg-transparent ${
                      errors.services && touched.services
                        ? "border-red-500"
                        : "border-primary/15"
                    }`}
                  />
                  <ErrorMessage
                    name="services"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div>
                  <label htmlFor="accessLink">Link de Acesso:</label>
                  <Field
                    name="accessLink"
                    className={`w-full p-4 border rounded-sm bg-transparent ${
                      errors.accessLink && touched.accessLink
                        ? "border-red-500"
                        : "border-primary/15"
                    }`}
                  />
                  <ErrorMessage
                    name="accessLink"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div>
                  <label htmlFor="challenges">Desafios:</label>
                  <Field
                    name="challenges"
                    className={`w-full p-4 border rounded-sm bg-transparent ${
                      errors.challenges && touched.challenges
                        ? "border-red-500"
                        : "border-primary/15"
                    }`}
                  />
                  <ErrorMessage
                    name="challenges"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div>
                  <label htmlFor="objectives">Objetivos:</label>
                  <Field
                    name="objectives"
                    className={`w-full p-4 border rounded-sm bg-transparent ${
                      errors.objectives && touched.objectives
                        ? "border-red-500"
                        : "border-primary/15"
                    }`}
                  />
                  <ErrorMessage
                    name="objectives"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div>
                  <label htmlFor="results">Resultados:</label>
                  <Field
                    name="results"
                    className={`w-full p-4 border rounded-sm bg-transparent ${
                      errors.results && touched.results
                        ? "border-red-500"
                        : "border-primary/15"
                    }`}
                  />
                  <ErrorMessage
                    name="results"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div>
                  <label htmlFor="clientName">Nome do Cliente:</label>
                  <Field
                    name="clientName"
                    className={`w-full p-4 border rounded-sm bg-transparent ${
                      errors.clientName && touched.clientName
                        ? "border-red-500"
                        : "border-primary/15"
                    }`}
                  />
                  <ErrorMessage
                    name="clientName"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>
              </div>

              <Button disabled={isSubmitting} className="w-full">
                {isSubmitting ? "Carregando..." : "Postar projeto"}
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Page;
