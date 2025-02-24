import { Url } from "next/dist/shared/lib/router/router";
import { useTranslations } from "next-intl";
import Link from "next/link";
import SvgIcon from "./SvgIcon";

interface HeaderProps {
  textKey: string;
  goBack?: boolean;
  href?: Url;
  as?: "h2" | "h3";
  className?: string;
}

export default function Header({
  textKey,
  goBack,
  href,
  as = "h2",
  className,
}: HeaderProps) {
  const t = useTranslations();
  const HeadingTag = as;

  return href ? (
    <Link href={href} className="flex items-center gap-2">
      {goBack && (
        <SvgIcon src="/icons/arrow-left.svg" alt={t("iconGoBackAlt")} />
      )}
      <h1 className="font-open-sans text-[32px] font-bold text-dark-blue hover:cursor-pointer">
        {t(textKey)}
      </h1>
    </Link>
  ) : (
    <HeadingTag
      className={`font-open-sans text-2xl font-bold text-dark-blue flex items-center gap-2 mb-[50px] ${className}`}
    >
      {goBack && (
        <SvgIcon src="/icons/arrow-left.svg" alt={t("iconGoBackAlt")} />
      )}
      {t(textKey)}
    </HeadingTag>
  );
}
