"use client";

import WorkCard from "@/components/WorkCard";
import { works } from "@/lib/works";

export default function Home() {
  return (
    <div className="w-full px-28 py-24">
      <div className="flex w-full justify-between">
        <div className="space-y-10 justify-between w-3/5">
          <p className="font-semibold text-xl text-black">
            Identidade Visual | Editorial | Social Media
          </p>
          <h1 className="font-normal text-7xl text-black font-abril">
            VICTORIA FAGUNDES
          </h1>
          <p className="font-normal text-base text-black">
            Transformando ideias em realidade através da criatividade!
          </p>
        </div>
        <div className="bg-yellow-200 w-2/5 h-96"></div>
      </div>
      <div className="flex w-full px-12 py-44 justify-between">
        <div className="flex-col w-60 justify-items-center space-y-8">
          <div className="border rounded-full bg-slate-500 h-28 w-28"></div>
          <h1 className="font-semibold text-xl text-black">
            Design de Social Media
          </h1>
          <p className="font-semibold text-sm text-black text-center">
            Criação de logotipos, paletas de cores e elementos visuais que
            refletem a essência da sua marca, garantindo reconhecimento e
            consistência.
          </p>
        </div>
        <div className="flex-col w-60 justify-items-center space-y-8">
          <div className="border rounded-full bg-slate-500 h-28 w-28"></div>
          <h1 className="font-semibold text-xl text-black">Design Editorial</h1>
          <p className="font-semibold text-sm text-black text-center">
            Desenvolvimento de projetos gráficos para livros, revistas e
            materiais impressos ou digitais, unindo estética e funcionalidade
            para uma leitura envolvente.
          </p>
        </div>
        <div className="flex-col w-60 justify-items-center space-y-8">
          <div className="border rounded-full bg-slate-500 h-28 w-28"></div>
          <h1 className="font-semibold text-xl text-black">Audiovisual</h1>
          <p className="font-semibold text-sm text-black text-center">
            Captação, edição e pós-produção de vídeos criativos, com foco em
            storytelling visual, efeitos e sonorização, para engajar seu público
            em múltiplas plataformas.
          </p>
        </div>
      </div>
      <div className="py-5 px-14" id="jobs-section">
        <h1 className="text-3xl text-black text-center mb-14">Trabalhos</h1>
        <div className="grid grid-cols-3 gap-x-10 gap-y-10">
          {works.map((work, index) => {
            return <WorkCard key={index} {...work}></WorkCard>;
          })}
        </div>
      </div>
      <div className="py-5 px-14">
        <h1 className="text-3xl text-black text-center mb-14">Clientes</h1>
        <div className="flex justify-between">
          <div className="flex flex-col justify-between bg-lightclientpink border border-clientborder w-56 p-7">
            <p className="text-black text-sm italic">
              A identidade visual da Pré-moldados Braga ficou perfeita! A
              Victoria capturou a essência da nossa marca com muita
              criatividade.
            </p>
            <div className="flex  space-x-4">
              <div className="rounded-full bg-slate-400 w-10 h-10"></div>
              <div className="flex justify-start items-end">
                <p className="text-black text-xs">Angelita Braga</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between bg-lightclientpink border border-clientborder w-56 h-72 p-7">
            <p className="text-black text-sm italic">
              Colaborar com a Vic foi ÓTIMO! Muito criativa e detalhista, sempre
              entregando no prazo com ótima comunicação.
            </p>
            <div className="flex  space-x-4">
              <div className="rounded-full bg-slate-400 w-10 h-10"></div>
              <div className="flex justify-start items-end">
                <p className="text-black text-xs">Angelita Braga</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between bg-lightclientpink border border-clientborder w-56 p-7">
            <p className="text-black text-sm italic">
              Com um olhar estratégico, a Victoria transformou nossa presença
              nas redes sociais de forma impecável.
            </p>
            <div className="flex  space-x-4">
              <div className="rounded-full bg-slate-400 w-10 h-10"></div>
              <div className="flex justify-start items-end">
                <p className="text-black text-xs">Angelita Braga</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
