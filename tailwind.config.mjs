/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        background: "#F9F4EC",
        surface: "#FFFDF9",
        "text-primary": "#5B3B2A",
        "text-secondary": "#76594A",
        "accent-orange": "#D79B63",
        "accent-green": "#7CBF8A",
        "accent-blue": "#1C6AA0",
        "accent-blue-soft": "#79B9E6",
        border: "#E8D9C8",
      },
      fontFamily: {
        heading: ["Nunito", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      borderRadius: {
        button: "16px",
        card: "24px",
        image: "20px",
        pill: "999px",
      },
      boxShadow: {
        soft: "0 12px 32px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [],
};
