/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textShadow: {
        // Definir tus sombras de texto personalizadas
        'default': '2px 2px 4px #000000',
        'md': '3px 3px 5px rgba(0,0,0,0.6)',
      },
    },
  },
  plugins: [

  ],
}

