import { Open_Sans, Playfair_Display } from "next/font/google";

export const openSans = Open_Sans({
  variable: "--font-open-sans",
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  weight: ["700", "900"],
  style: ["normal"],
  subsets: ["latin"],
});