import Link from "next/link";
import { useTranslations } from "next-intl";
import { SvgIcon } from "@/components";

interface SeeMoreButtonProps {
  href: string
}

export default function SeeMoreButton({ href }: SeeMoreButtonProps) {
  const t = useTranslations("common");

  return (
    <Link href={href} className="flex items-center justify-center hover:cursor-pointer hover:opacity-70 group">
      <span className="font-open-sans font-bold text-base text-text-blue pr-6">
        {t("seeMore")}
      </span>
      <SvgIcon
        src={`/icons/arrow-right.svg`}
        className="w-5 transition-transform duration-300 group-hover:translate-x-2"
        alt={t('iconSeeMoreAlt')}
      />
    </Link>
  );
}
