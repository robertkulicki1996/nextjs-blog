import { useTranslations } from "next-intl";

export default function Separator() {
  const t = useTranslations("home");
  return (
    <div className="items-center justify-centerw-full py-6 mb-16 border-b border-gray hidden sm:flex">
      <div className="font-open-sans font-bold text-xs text-dark-blue mr-1">
        <span className="mr-2">&mdash;</span>
        {t("label").toUpperCase()}
      </div>
    </div>
  );
}
