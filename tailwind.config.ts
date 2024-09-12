import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        "xxs-xs": { min: "318px", max: "480px" }, // Custom range from 320px to 480px
        "tablet-md": { min: "767px", max: "991px" }, // Custom range from 320px to 480px
        "laptop-md": { min: "991px", max: "1023px" }, // Custom range from 320px to 480px
        "desktop-lg": { min: "1023px", max: "1199px" }, // Custom range from 320px to 480px
        "large-screen": { min: "1199px", max: "1699px" }, // Custom range from 320px to 480px
        "extra-large": { min: "1699px" }, // Custom range from 320px to 480px
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
export default config;
