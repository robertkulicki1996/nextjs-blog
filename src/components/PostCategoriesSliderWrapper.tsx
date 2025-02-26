import { usePostCategories } from "@/consts/postCategories";
import SliderClient from "./PostCategoriesSliderClient";

export default function PostCategoriesSliderWrapper() {
  const { postCategories } = usePostCategories();
  return <SliderClient slides={postCategories} />;
}
