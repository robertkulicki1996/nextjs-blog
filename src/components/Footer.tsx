import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("common");

  return (
    <p className="font-open-sans text-sm text-black mb-6">
      © <b>{new Date().getFullYear()}</b> {t("footerContent")}
    </p>
  );
}
