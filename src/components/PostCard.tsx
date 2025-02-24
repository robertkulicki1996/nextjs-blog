import { useTranslations } from "next-intl";
import { PostCategories } from "@/types";
import { SeeMoreButton } from "@/components";
import { usePostCategories } from "@/consts/postCategories";

interface PostCardProps {
  id: number;
  category: PostCategories;
  title: string;
  publicationDate: string;
  description: string;
}

export default function PostCard({
  id,
  category,
  title,
  publicationDate,
  description,
}: PostCardProps) {
  const t = useTranslations("common");

  const { getCategoryData } = usePostCategories();
  const { bgColor } = getCategoryData(category);

  return (
    <article className="flex flex-col items-start min-h-[579px] min-w-full max-w-[366px] sm:min-w-[366px] rounded-tl-[60px] rounded-br-[60px] bg-light-gray px-9 py-12">
      <div
        className={`font-open-sans font-semibold italic underline-thick text-sm text-${bgColor} mb-4`}
      >
        {t(`category.${category}`).toUpperCase()}
      </div>


      <div className="flex flex-col justify-between items-start w-full gap-4 mb-auto">
        <h4 className="font-playfair-display text-2xl h-[136px] font-black text-plain-blue">
          {title}
        </h4>
        <div className="w-16 border-b-[2px] border-plain-blue block sm:hidden mb-6"></div>
        <div className="font-playfair-display text-xl font-bold text-plain-blue">
          {publicationDate}
        </div>
      </div>

      <p className="font-open-sans text-base font-normal text-plain-blue mb-auto">
        {description}
      </p>
      <SeeMoreButton href={`/posts/${id}`} />
    </article>
  );
}
