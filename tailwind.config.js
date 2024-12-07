/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage:{ 
        ' gradient-radial':'radial-gradient(var(--tw-gradient-stops))' ,
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        nav: "#0a0a0a;",
        page: "#1e3b37",
        card: "#47566a",
        "card-hover": "#252534",
        "default-text": "#9c9c9c",
        "accent": "#301a3b",
        "hover-accent": "#a384b3",
      },
      fontSize: {
        'x1': '1.5rem',
      },
    },
  },
  plugins: [],
};
