export interface Plan {
  id: number;
  title_fa: string;
  title_en: string;
  content_fa: string;
  content_en: string;
  price_fa: number;
  price_en: number;
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
  title_en: string;
  content_en: string;
  image: string;
}
