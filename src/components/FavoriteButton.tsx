"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { SvgIcon } from "@/components";

interface FavoriteButtonProps {
  initialFavorite?: boolean;
}

// TODO: MAKE SERVER SIDE COMPONENT
export default function FavoriteButton({
  initialFavorite = false,
}: FavoriteButtonProps) {
  const [isFavorite, setIsFavorite] = useState(initialFavorite);

  const t = useTranslations("common");
  const buttonMessage = isFavorite
    ? t("removeFromFavorites")
    : t("addToFavorites");

  return (
    <button
      onClick={() => setIsFavorite(!isFavorite)}
      className="flex items-center justify-center hover:cursor-pointer"
    >
      <SvgIcon
        src={`/icons/star-${isFavorite ? "filled" : "outline"}.svg`}
        className="pr-6"
        alt={t('iconStarAlt')}
      />
      <span className="font-open-sans font-bold text-lg text-dark-blue">
        {buttonMessage}
      </span>
    </button>
  );
}
