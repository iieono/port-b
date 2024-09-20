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
        primary: "#e4e4e4",
        bg: "#141515",
        "custom-whiteish": "#F5F7F8",
        "custom-yellow": "#F4CE14",
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
