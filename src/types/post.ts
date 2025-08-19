export interface Post {
  id: string;
  title_fa: string;
  title_en: string;
  content_fa: string;
  content_en: string;
  author: string;
  createdAt: string;
  updatedAt: string;
  isActive: boolean;
  isPublished: boolean;
  slug: string;
  views: number;
  timeToRead: number;
  image: string;
}
