import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        "2": "2px",
      },
      colors: {
        "primary-red": "#CA003D",
        "primary-orange": "#F8D8AD",
      },
      width: {
        "35px": "35px",
      },
      height: {
        "35px": "35px",
      },
      // backgroundColor: {
      //   "primary-red": "#CA003D",
      //   "primary-orange": "#F8D8AD",
      // },
      // borderColor: {
      //   "primary-red": "#CA003D",
      //   "primary-orange": "#F8D8AD",
      // },
      // textColor: {
      //   "primary-red": "#CA003D",
      //   "primary-orange": "#F8D8AD",
      // },
    },
  },
  plugins: [],
};
export default config;
