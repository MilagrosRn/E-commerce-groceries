module.exports = {
  content: ["./src/**/*.{html,js}",'./node_modules/tw-elements/dist/js/**/*.js'],
    purge: [
    './public/**/*.html',
  ],
  // darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      current: 'currentColor',
      'white': '#ffffff',
      'orange': {
        100: '#ffd400',
        200: '#ffe20a',
        300: '#FF9D00',
      },
      'green':{
        100: '#bfd200',
        200: '#80b918',
        300: '#8abc40',
      },
      'red':{
        100: '#f7391c'
      }
  }

},
  // variants: {
  //   extend: {},
  // },
  plugins: [
    require('tw-elements/dist/plugin.js')
  ]
}