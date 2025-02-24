"use client";

import { ReactSVG } from "react-svg";

interface SvgIconProps {
  src: string;
  alt: string;
  className?: string
}

export default function SvgIcon({ src, alt, className }: SvgIconProps) {
  return <ReactSVG src={src} title={alt} className={className} />;
}
