import { ContainerProps } from "@/types";

export default function GridContainer({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div
      className={`grid grid-cols-[repeat(auto-fit,_minmax(366px,_1fr))] gap-[50px] ${className}`}
    >
      {children}
    </div>
  );
}
