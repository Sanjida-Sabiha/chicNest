/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    // Disable default container sizes
    container: {
      // Default values will be overridden
      center: true,
      padding: '0',
    },
    extend: {
      container: {
        center: true, 
        padding:'18px',
        screens: {
          sm: "100%",
          md: "100%",
          lg: "100%",
          xl: "1290px",
        },
      },
      fontFamily:{
        'font_grotesk': ["Space Grotesk", "sans-serif"]
      },
      colors:{
        'mainBg':'#EBE8E5',
        'primaryColor':'#331305',
        'secondaryColor':'#4D4947',
        'spanBg':'#FF8048',
        'cardBg':'#E2DCD5',
        'borderColor':'#BFBAB5',
      },
      spacing:{
        '300':'300px',
        '410':'410px',
        '520':'520px',
        '572':'572px',
        '578':'578px',
        '601':'601px',
        '630':'630px',
        '740':'740px',
        '850':'850px',
      },
      fontSize:{
        '22xl':'22px',
        '24xl': '24px',
        '26xl': '26px',
        '28xl':'28px',
        '30xl': '30px',
        '36xl':'36px',
        '40xl':'40px',
        '42xl':'42px',
        '44xl':'44px',
        '46xl':'46px',
        '50xl':'50px',
        '60xl':'60px',
        '70xl':'70px',
        '90xl':'90px',
        '140xl':'140px',
      },
      lineHeight: {
        '8': '30px',
        '32':'32px',
        '34':'34px',
        '38':'38px',
        '40':'40px',
        '42':'42px',
        '46':'46px',
        '50':'50px',
        '52':'52px',
        '54':'54px',
        '56':'56px',
        '64':'64px',
        '70':'70px',
        '100':'100px',
        '140':'140px',
      },
      animation: {
        move: 'move 3s cubic-bezier(0.65, 0, 0.35, 1) infinite',
      },
      keyframes: {
        move: {
          '0%': { transform: 'translate(0, 0)' },
          '20%': { transform: 'translate(-20px, -20px)' },
          '40%': { transform: 'translate(20px, -20px)' },
          '60%': { transform: 'translate(20px, 20px)' },
          '80%': { transform: 'translate(-20px, 20px)' },
          '100%': { transform: 'translate(0, 0)' },
        },
      }, 
    },
  },
  plugins: [],
}
