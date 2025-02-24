import { useTranslations } from "next-intl";
import {
  PostCategories,
  PostCategoryColors,
  PostCategoryBgColors,
  PostCategoriesRecord,
  PostCategoryData,
} from "@/types";

export function usePostCategories() {
  const t = useTranslations("common.category");

  const postCategories: PostCategoriesRecord = {
    knowledge: {
      id: 0,
      name: t("knowledge"),
      nameColor: PostCategoryColors.White,
      imageSrc: "/images/knowledge.png",
      iconSrc: "/icons/knowledge.svg",
      bgColor: PostCategoryBgColors.Blue,
    },
    inspirations: {
      id: 1,
      name: t("inspirations"),
      nameColor: PostCategoryColors.DarkGray,
      imageSrc: "/images/inspirations.png",
      iconSrc: "/icons/inspirations.svg",
      bgColor: PostCategoryBgColors.Yellow,
    },
    interpretations: {
      id: 2,
      name: t("interpretations"),
      nameColor: PostCategoryColors.White,
      imageSrc: "/images/interpretations.png",
      iconSrc: "/icons/interpretations.svg",
      bgColor: PostCategoryBgColors.Red,
    },
    availables: {
      id: 3,
      name: t("availables"),
      nameColor: PostCategoryColors.White,
      imageSrc: "/images/availables.png",
      iconSrc: "/icons/available.svg",
      bgColor: PostCategoryBgColors.Green,
    },
  };

  const getCategoryData = (category: PostCategories): PostCategoryData =>
    postCategories[category];

  return {
    postCategories,
    getCategoryData,
  };
}
