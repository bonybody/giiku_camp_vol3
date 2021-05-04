module.exports = {
  // purge cssの設定
  purge: {
    content: [
      './assets/**/*.{css,scss,sass}',
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  },
  darkMode: false, // or 'media' or 'class'

  // 予め定義しておきたいutilities
  theme: {
    extend: {
      borderRadius: {
        frame: '8px'
      },
      colors: {
        primary: '#F96A76',
        secondary: '#7BCCAC'
      },
      minWidth: {
        button: '64px'
      }
    }
  },
  plugins: []
}
