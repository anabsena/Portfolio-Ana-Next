"use client"

import React from "react";
import { Formik, Field, Form, ErrorMessage, FieldProps } from "formik";
import * as Yup from "yup";
import { signUpEmailPassword } from "@/firebase/authentication";
import Button from "@/app/components/Button";
import { useRouter } from "next/router";

const Page = () => {
  const router = useRouter();
  return (
    <div className="flex min-h-screen w-full min-w-[600px] items-center justify-center ">
      <div className="w-full bg-details/5 border border-primary/15 p-8 rounded-sm shadow-lg flex flex-col gap-8">
        <h2 className="text-2xl font-bold font-satoshi uppercase">Cadastre-se</h2>
        <Formik
          initialValues={{
            email: "",
            password: "",
            name: "",
          }}
          validationSchema={Yup.object({
            name: Yup.string().required("O nome é obrigatório"),
            email: Yup.string()
              .email("Email inválido")
              .required("O email é obrigatório"),
            password: Yup.string()
              .min(6, "A senha precisa ter no mínimo 6 caracteres")
              .required("A senha é obrigatória"),
          })}
          onSubmit={async (values) => {
            console.log(values);
            const response = await signUpEmailPassword(
              values.name,
              values.email,
              values.password
            );
            if(response.status === 200){
              router.push("/private-projects")
             }else{
               alert("Não foi possível fazer login. Verifique seu email e senha.")
             }
          }}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium">
                  Nome
                </label>
                <Field name="name">
                  {({ field }: FieldProps) => (
                    <input
                      {...field}
                      type="text"
                      className={`w-full p-4 border rounded-sm bg-transparent ${
                        errors.name && touched.name
                          ? "border-red-500"
                          : "border-primary/15"
                      }`}
                    />
                  )}
                </Field>
                
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <Field name="email">
                  {({ field }: FieldProps) => (
                    <input
                      {...field}
                      type="email"
                      className={`w-full p-4 border rounded-sm bg-transparent ${
                        errors.email && touched.email
                          ? "border-red-500"
                          : "border-primary/15"
                      }`}
                    />
                  )}
                </Field>
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium">
                  Senha
                </label>
                <Field name="password">
                  {({ field }: FieldProps) => (
                    <input
                      {...field}
                      type="password"
                      className={`w-full p-4 border rounded-sm bg-transparent ${
                        errors.password && touched.password
                          ? "border-red-500"
                          : "border-primary/15"
                      }`}
                    />
                  )}
                </Field>
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <Button
                disabled={isSubmitting}
                className="w-full "
              >
                {isSubmitting ? "Carregando..." : "Cadastrar"}
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Page;
