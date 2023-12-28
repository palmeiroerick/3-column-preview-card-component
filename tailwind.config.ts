import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      lg: "1440px",
    },
    colors: {
      /* Primary Colors */
      brightOrange: "#e38826",
      darkCyan: "#006970",
      veryDarkCyan: "	#004241",

      /* Neutral Colors */
      transparentWhite: "#ffffffbf",
      veryLightGray: "#f2f2f2",
    },
    fontFamily: {
      lexendDeca: "var(--lexend-deca)",
      bigShouldersDisplay: "var(--big-shoulders-display)",
    },
    fontWeight: {
      normal: "400",
      bold: "700",
    },
  },
  plugins: [],
};

export default config;
