import { usePostCategories } from "@/consts/postCategories";
import SliderClient from "./PostCategoriesSliderClient";

export default async function PostCategoriesSliderWrapper() {
  const { postCategories } = usePostCategories();
  return <SliderClient slides={postCategories} />;
}
