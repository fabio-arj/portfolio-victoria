import React from "react";
import Image from "next/image";
import ProfilePicture from "../../../public/cat.jpg";

export default function About() {
  return (
    <div className="w-full px-28 py-24 bg-lightpink">
      <div className="w-full text-black flex justify-between">
        <div className="space-y-4 w-fit">
          <Image src={ProfilePicture} alt="" width={200} height={200}></Image>
          <div>
            <p className="font-bold text-base">Victoria Fagundes</p>
            <p className="text-xs">Designer & Ilustradora</p>
          </div>
        </div>
        <div className="w-2/3 space-y-5">
          <p className="font-bold">Oi! Eu sou a Victoria,</p>
          <div className="leading-7">
            <p>
              Tenho 22 anos e sou completamente apaixonada por arte e trabalhos
              manuais. Além de ser designer e autista, também sou mãe de uma
              turma de pets que mantém a casa sempre animada.
            </p>
            <p>
              Quando não estou criando algo novo, você vai me encontrar
              praticando yoga ou pilates para equilibrar a mente, ouvindo minhas
              músicas favoritas ou mergulhada em hobbies criativos como colagens
              e pintura em tela. É assim que mantenho a cabeça cheia de ideias e
              sempre pronta para o próximo desafio!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
