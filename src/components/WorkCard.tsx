import React from "react";
import Image from "next/image";
import { Work } from "@/lib/types";

export default function (props: Work) {
  return (
    <a className="space-y-3">
      <div className="flex justify-center">
        <Image src={props.image} alt=""></Image>
      </div>
      <p className="text-black text-base">{props.title}</p>
      <p className="text-black text-xs">{props.description}</p>
    </a>
  );
}
