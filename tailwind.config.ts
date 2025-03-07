import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#EDD6B6', 
      },
      textColor: {
        primary: '#EDD6B6',
        secondary: '#1D1E1F',
      },
      backgroundColor: {
        primary: '#0E0E0E',
        details: '#DAC5A7',
      },
      fontFamily: {
        gambetta: ['"Gambetta"', 'serif'], 
        satoshi: ['"Satoshi"', "sans-serif"],
        cinzel: ['"Cinzel"', "serif"],
        petit_formal_script: ['"Petit Formal Script"', "serif"],
        quicksand: ['"Quicksand"', "sans-serif"],
      },
      fontWeight: {
        thin: '100',   
        light: '300', 
        normal: '400', 
        medium: '500', 
        semibold: '600', 
        bold: '700',  
        extrabold: '800', 
        black: '900',  
      },
    },
  },
  plugins: [],
} satisfies Config;
