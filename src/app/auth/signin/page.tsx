"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Formik, Field, Form, ErrorMessage, FieldProps } from "formik";
import * as Yup from "yup";
import Button from "../../components/Button";
import { loginWithEmailPassword } from "@/firebase/authentication";

const Page = () => {
const router = useRouter()
  return (
    <div className="flex min-h-screen w-full  items-center justify-center ">
      <div className="w-full bg-details/5 border border-primary/15 p-8 rounded-sm shadow-lg max-w-[600px]">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <Formik
          initialValues={{
            email: "",
            password: "",
            name:"",
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Email inválido")
              .required("O email é obrigatório"),
            password: Yup.string()
              .min(6, "A senha precisa ter no mínimo 6 caracteres")
              .required("A senha é obrigatória"),
          })}
          onSubmit={async (values) => {
            console.log(values);
           const response = await loginWithEmailPassword(values.email, values.password)
           if(response.status === 200){
             router.push("/private-projects")
            }else{
              alert("Não foi possível fazer login. Verifique seu email e senha.")
            }
          }}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form className="space-y-4">
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
                className="w-full"
              >
                {isSubmitting ? "Carregando..." : "Entrar"}
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Page;
