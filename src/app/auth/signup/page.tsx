"use client";

import React from "react";

import dynamic from "next/dynamic";

const SignUpForm = dynamic(() => import('./SignUpForm'), { ssr: false });

const Page = () => {
  return (
    <div className="flex min-h-screen w-full min-w-[600px] items-center justify-center ">
      <div className="w-full bg-details/5 border border-primary/15 p-8 rounded-sm shadow-lg flex flex-col gap-8">
        <h2 className="text-2xl font-bold font-satoshi uppercase">Cadastre-se</h2>
        <SignUpForm />
      </div>
    </div>
  );
};

export default Page;
