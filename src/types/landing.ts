import type { S } from "node_modules/framer-motion/dist/types.d-Cjd591yU";

export interface Plan {
  id: number;
  title_fa: string;
  title_en: string;
  content_fa: string;
  content_en: string;
  price_fa: string;
  price_en: string;
  isRecommended: boolean;
}

export interface FAQ {
  id:number,
  name_fa: string;
  content_fa: string;
  name_en: string;
  content_en: string;
}

export interface Feature {
  title_fa: string;
  content_fa: string;
  title_en: string;
  content_en: string;
  image: string;
}

export interface Testimonial {
  title_fa: string;
  content_fa: string;
  position_fa: string;
  title_en: string;
  content_en: string;
  position_en: string;
  image: string;
}


export interface Download {
  id: number;
  title: string;
  icon: string;
  link: string;
}