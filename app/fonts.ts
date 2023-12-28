import type { NextFontWithVariable } from "next/dist/compiled/@next/font";
import { Big_Shoulders_Display, Lexend_Deca } from "next/font/google";

export const lexendDeca: NextFontWithVariable = Lexend_Deca({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  variable: "--lexend-deca",
});

export const bigShouldersDisplay: NextFontWithVariable = Big_Shoulders_Display({
  weight: "700",
  style: "normal",
  subsets: ["latin"],
  variable: "--big-shoulders-display",
});
