const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionTimingFunction:{
        DEFAULT:'ease-in-out'
      },
      transitionDuration:{
        DEFAULT:'400ms'
      },
      keyframes:{
        fadeIn:{
          from:{
            opacity:0
          },
          to:{
            opacity:1
          }
        },
      },
      animation:{
        fade:'fadeIn .9s ease-in-out'
      }
    },
  },
  plugins: [
    plugin(function({ addUtilities, addComponents, theme }) {
 addComponents({
   '.btn-primary':{
     backgroundColor:theme('colors.orange.500'),
     color:'white',
     padding:'10px 0',
     display:'block',
     width:'100%',
     fontSize:18,
     fontWeight:'bold',
     '&:hover':{
       backgroundColor:theme('colors.orange.600'),
      }
   }
 }),
     addUtilities({
       '.shadow':{
         textShadow:'1px 1px rgba(0,0,0,0.1)'
       }
     })
    }),
  ],
}
