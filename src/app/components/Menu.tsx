"use client";
import React, { useState } from "react";
import Button from "./Button";
import { HiMenu, HiX } from "react-icons/hi"; 

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <div className="absolute z-50 py-4 ">
      <div className="bg-details/5 p-4 border border-primary/15 rounded-sm flex justify-between items-center gap-8 backdrop-blur-3xl">
        <h1 className="uppercase font-gambetta text-xl">Ana.</h1>
        <nav className={`gap-6 font-satoshi text-sm items-center hidden md:flex font-medium text-primary/80`}>
          <a className="font-sans tracking-wider uppercase">Serviços</a>
          <a className="font-sans tracking-wider uppercase">Sobre Mim</a>
          <a className="font-sans tracking-wider uppercase">Projetos</a>
        </nav>
        <Button variant="secondary">Entre em contato</Button>

        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-2xl">
            {isMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-details/5 p-4 `}>
        <nav className="flex flex-col gap-4 font-satoshi text-sm items-center">
          <a className="font-sans tracking-wider uppercase">Serviços</a>
          <a className="font-sans tracking-wider uppercase">Sobre Mim</a>
          <a className="font-sans tracking-wider uppercase">Projetos</a>
          <Button variant="secondary">Entre em contato</Button>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
