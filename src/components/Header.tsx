import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center h-20 w-full justify-between px-10 bg-white">
      <div>
        <Link href="/" className="text-xl font-normal text-black font-abril">
          Victoria Fagundes
        </Link>
      </div>
      <div className="flex space-x-4">
        <Link href="/sobre" className="text-base font-normal text-black">
          Sobre mim
        </Link>
        <Link
          href="/#jobs-section"
          className="text-base font-normal text-black"
        >
          Trabalhos
        </Link>
        <a href="" className="text-base font-normal text-black">
          Contato
        </a>
      </div>
    </header>
  );
}
