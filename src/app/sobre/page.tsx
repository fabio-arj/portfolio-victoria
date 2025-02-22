"use client";

import React from "react";
import Image from "next/image";
import ProfilePicture from "../../../public/cat.jpg";

export default function About() {
  return (
    <div className="w-full text-black">
      <div className="w-full px-28 py-24 bg-lightpink flex justify-between">
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
      <div className="py-24 px-40 text-justify">
        <p>
          Minha jornada no design começou antes mesmo da faculdade, desde o
          início da graduação, me envolvi profundamente no mundo do design.
          Durante meus anos de atuação na área do design gráfico, tive a
          oportunidade de trabalhar em diversos projetos, o que expandiu minha
          visão criativa e técnica e me permitiram crescer profissionalmente,
          aprimorando minhas habilidades. Atualmente, estou direcionando minha
          carreira para o planejamento estratégico e estruturação de marcas nas
          redes sociais, onde aplico meu conhecimento de design para construir
          presenças digitais impactantes e autênticas. Além disso, sou
          ilustradora desde os 14 anos e, hoje, atuo especialmente na área de
          ilustração infantil, criando personagens e cenários que dão vida a
          histórias encantadoras.
        </p>
      </div>
    </div>
  );
}
