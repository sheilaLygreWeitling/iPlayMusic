module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors:{
        'darkBlue': '#114793',
        'lightBlue': '#00A1CB',
        'turkisBlue': '#0ABEBE',
        'darkGreen': '#3A7634',
        'green': '#5EB11C',
        'yellow': '#F2BC06',
        'orange': '#F18D05',
        'darkPink': '#D70060',
        'red': '#E54028',
        'pink': '#FF1168',
        'white': '#FFFFFF',
        'darkPurple': '#341931',
        'black': '#111625',
        
        'gradientGreenFrom': '#5EB11C',
        'gradientGreenTo': '#3A7634',
        
        'gradientBlueFrom': '#00A1CB',
        'gradientBlueTo': '#115793',
        
        'gradientRedFrom': '#EE0979',
        'gradientRedTo': '#FF6A00',
        
        'reallyBlack': '#111111',
      },
      fontSize:{
        'headers1': '48px',
        'headers2': '36px',
        'headers3': '32px',
        'headers4': '24px',
        'headers5': '20px',
        'headers6': '15px',
        'normal': '15px',
        'small': '12px',
        'xsmall': '10px',
      }
    },
  },
  plugins: [],
}
