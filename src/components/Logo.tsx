import { useTranslations } from "next-intl";

const LOGO_SRC = {
  mobile: "/logo-mobile.svg",
  desktop: "/logo-desktop.svg",
};

export default function Logo() {
  const t = useTranslations("common");

  return (
    <picture>
      <source srcSet={LOGO_SRC.mobile} media="(max-width: 768px)" />
      <img src={LOGO_SRC.desktop} alt={t("logoAlt")} className="mb-16"/>
    </picture>
  );
}
