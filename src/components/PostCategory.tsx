import Image from "next/image";
import { useTranslations } from "next-intl";
import { usePostCategories } from "@/consts/postCategories";
import { PostCategories } from "@/types";
import { SvgIcon } from "@/components";

interface CategoryProps {
  id: number;
  category: PostCategories;
}

export default function PostCategory({ id, category }: CategoryProps) {
  const t = useTranslations("common");
  const { getCategoryData } = usePostCategories();

  const { name, nameColor, imageSrc, iconSrc, bgColor } =
    getCategoryData(category);

  return (
    <div
      id={`post-category-${id}`}
      className={`flex flex-col h-[457px] min-w-full max-w-[366px] sm:min-w-[366px] rounded-tl-[60px] rounded-br-[60px] overflow-hidden hover:cursor-pointer hover:border-[6px] border-${`d-${bgColor}`} hover:shadow-custom transition-all`}
    >
      <div className="relative h-1/2">
        <Image
          src={imageSrc}
          alt={name}
          fill
          sizes="(max-width: 768px) 100vw, (min-width: 769px) 25vw"
          priority
        />
      </div>
      <div
        className={`flex flex-col items-center justify-center h-1/2 bg-${bgColor}`}
      >
        <span
          className={`font-open-sans text-${nameColor} text-xl font-bold mb-6`}
        >
          {name.toUpperCase()}
        </span>
        <SvgIcon src={iconSrc} alt={t("categoryIconAlt", { category })} />
      </div>
    </div>
  );
}
