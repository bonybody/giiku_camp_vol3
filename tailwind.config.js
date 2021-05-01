module.exports = {
  purge: [
    './assets/**/*.{css,scss,sass}',
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  darkMode: false, // or 'media' or 'class'

  theme: {

    extend: {
      screens: {
        s: '375px',
        m: '560px',
        l: '960px',
        f: '1336px'
      },
      spacing: {
        '2px': '0.125rem',
        '3px': '0.1875rem',
        '5px': '0.3125rem',
        '6px': '0.375rem',
        '7px': '0.4375rem',
        '8px': '0.5rem',
        '10px': '0.625rem',
        '13px': '0.8125rem',
        '15px': '0.9375rem',
        '16px': '1rem',
        '18px': '1.125rem',
        '20px': '1.25rem',
        '25px': '1.5625rem',
        '30px': '1.875rem',
        '40px': '2.5rem',
        '50px': '3.125rem',
        '60px': '3.75rem',
        '80px': '5rem',
        '100px': '6.25rem'
      },
      fontSize: {
        '9px': '0.5625rem',
        '10px': '0.625rem',
        '12px': '0.75rem',
        '14px': '0.875rem',
        '16px': '1rem',
        '18px': '1.125rem',
        '20px': '1.25rem',
        '22px': '1.375rem',
        '26px': '1.625rem',
        '40px': '2.5rem'
      },
      colors: {
        // primary: '#2FB297',
        primary: 'red',
        secondary: '#00ADD3',
        theme: {
          primary: '#2ecaa9',
          secondary: '#00bfd7'
        }
      },
      opacity: {
        70: '.7'
      }
    }
  },
  plugins: []
}
