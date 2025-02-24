import { PostCategories } from "@/types";

export function getRandomPostCategory(seed: number): PostCategories {
  const categories = Object.values(PostCategories) as PostCategories[];
  return categories[seed % categories.length];
}
