import React from "react";
import Image from "next/image";
import { Work } from "@/lib/types";
import Link from "next/link";

export default function (props: Work) {
  return (
    <Link href={`/trabalhos/${props.id}`} className="space-y-3">
      <div className="flex justify-center">
        <Image src={props.image} alt=""></Image>
      </div>
      <p className="text-black text-base">{props.title}</p>
      <p className="text-black text-xs">{props.description}</p>
    </Link>
  );
}
