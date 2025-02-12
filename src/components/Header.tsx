import React from "react";

export default function Header() {
  return (
    <header className="flex items-center h-20 w-full justify-between px-20 bg-white">
      <div>
        <p className="text-xl font-normal text-black font-abril">
          Victoria Fagundes
        </p>
      </div>
      <div className="flex space-x-4">
        <a href="" className="text-base font-normal text-black">
          Sobre mim
        </a>
        <a href="" className="text-base font-normal text-black">
          Trabalhos
        </a>
        <a href="" className="text-base font-normal text-black">
          Contato
        </a>
      </div>
    </header>
  );
}
