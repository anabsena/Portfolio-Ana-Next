"use client";
import React, { useState } from "react";
import Button from "./Button";
import { HiMenu, HiX } from "react-icons/hi";
import Link from "next/link";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  return (
    <div className="fixed z-50 md:mt-8 mt-2 bg-primary">
      <div className="bg-details/5 p-3 border border-primary/15 rounded-sm flex justify-between items-center gap-12 backdrop-blur-3xl">
        <Link className="text-lg font-cinzel" href="/">
          Ana.
        </Link>
        <nav className="gap-8 font-satoshi text-sm items-center hidden md:flex font-medium text-primary/80">
          <Link
            className="font-sans tracking-widest uppercase hover:border-b-2 hover:border-primary"
            href="/services"
          >
            Serviços
          </Link>
          <Link
            className="font-sans tracking-widest uppercase hover:border-b-2 hover:border-primary"
            href="/about"
          >
            Sobre Mim
          </Link>
          <Link
            className="font-sans tracking-widest uppercase hover:border-b-2 hover:border-primary"
            href="/projects"
          >
            Projetos
          </Link>
        </nav>
        <Link href="/contact">
          <Button variant="secondary">Entre em contato</Button>
        </Link>

        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-2xl">
            {isMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden ${isMenuOpen ? "block" : "hidden"} bg-details/5 p-4`}
      >
        <nav className="flex flex-col gap-4 font-satoshi text-sm items-center">
          <Link
            className="font-sans tracking-widest uppercase hover:border-b-2 hover:border-primary"
            href="/services"
          >
            Serviços
          </Link>
          <Link
            className="font-sans tracking-widest uppercase hover:border-b-2 hover:border-primary"
            href="/about"
          >
            Sobre Mim
          </Link>
          <Link
            className="font-sans tracking-widest uppercase hover:border-b-2 hover:border-primary"
            href="/projects"
          >
            Projetos
          </Link>
          {/* <Link href="/contact">
            <Button variant="secondary">Entre em contato</Button>
          </Link> */}
        </nav>
      </div>
    </div>
  );
};

export default Menu;
