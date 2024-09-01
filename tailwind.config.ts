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
        primary: "#ffffe3",
        "custom-whiteish": "#F5F7F8",
        "custom-yellow": "#F4CE14",
        "custom-red": "#dc2626",
        "custom-gray": "#495E57",
        "custom-deepgray": "#45474B",
      },
    },
  },
  plugins: [],
};

export default config;
