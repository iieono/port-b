import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // primary: "#ffffe3",
        primary: "#f9f8ef",
        oriolas: "#e82a4e",
        secondary: "#e9d6bd",
        accent: "#a3c0bd",
        shift: "#10232d",
        bg: "#13181b",
        // "custom-red": "#FF1E00",
        "custom-red": "#da392a",
        "custom-gray": "#FF9B9B",
        "custom-deepgray": "#9f9f9f",
      },
    },
  },
  plugins: [],
};

export default config;
