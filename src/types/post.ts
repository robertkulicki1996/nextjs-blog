import { PostCategories } from "./postCategories";

export interface Post {
  id: number;
  title: string;
  body: string;
  category: PostCategories;
  publicationDate: string;
  description: string;
};
