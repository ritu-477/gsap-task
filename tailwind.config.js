/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}",
      "./index.html"],
    theme: {
      extend: {
        colors: {
          "custom-green": "#B6EFCB",
        },

        backgroundImage: {
          "hero-bg": "url(../assets/images/png/hero-bg.png)",
         
        },

        backgroundSize: {
          "full": "100% 100%",
          "cover": "cover",
        },
        screens: {
          'sm': '640px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1280px',
          '2xl': '1536px',
          '3xl': '1600px',
          '4xl': '1800px',
          '5xl': '1920px',
        },
  
      },
    },
    plugins: [],
  
  };
  
  