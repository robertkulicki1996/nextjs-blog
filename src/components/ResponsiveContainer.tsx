import { ContainerProps } from "@/types";

interface ResponsiveContainerProps extends ContainerProps {
  xPadding?: boolean;
  topPadding?: boolean;
}

export default function ResponsiveContainer({
  children,
	className = "",
  xPadding = true,
  topPadding = true,
}: ResponsiveContainerProps) {
  return (
    <div
      className={`max-w-[1920px] mx-auto ${
        xPadding ? "xl:px-[144px] md:px-[64px] px-[24px]" : ""
      } ${topPadding ? "xl:pt-[64px] md:pt-[32px] pt-[24px]" : ""} overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
}
