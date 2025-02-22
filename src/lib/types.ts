import type { StaticImageData } from "next/image";

export type Work = {
  id?: string;
  title: string;
  description: string;
  text?: string;
  image: StaticImageData;
  color?: string;
};
