import React from "react";
import { FaInstagram, FaLinkedinIn, FaBehance } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-white">
      <div className="flex justify-between mx-28 py-20 bg-white border border-gray-400 border-x-0 border-b-0">
        <div className="w-2/5 space-y-12">
          <h1 className="font-semibold text-3xl text-black">
            Vamos trabalhar juntos ?
          </h1>
          <p className="font-normal text-base text-black text-justify">
            Acompanhe meu trabalho nas redes sociais para e, se estiver pronto
            para transformar suas ideias, entre em contato. Vamos criar algo
            único juntos!
          </p>
          <div className="flex space-x-4 items-center">
            <FaInstagram color="#2d2d2d" size={30}></FaInstagram>
            <FaBehance color="#2d2d2d" size={30}></FaBehance>
            <FaLinkedinIn color="#2d2d2d" size={30}></FaLinkedinIn>
          </div>
        </div>
        <div className="flex-col space-y-5 w-1/2">
          <input
            type="text"
            placeholder="Nome"
            className="bg-input w-full h-16 px-8 text-black placeholder:text-black"
          />
          <input
            type="text"
            placeholder="E-mail"
            className="bg-input w-full h-16 px-8 text-black placeholder:text-black"
          />
          <input
            type="text"
            placeholder="Sua mensagem"
            className="align-text-top bg-input w-full h-56 px-8 text-black placeholder:text-black placeholder: items-start"
          />
          <button className="w-56 h-20 bg-black">Enviar</button>
        </div>
      </div>
    </footer>
  );
}
