module.exports = () => ({
  plugins: [
    require('postcss-import'),
    require('postcss-preset-env')({
      stage: 0
    })
  ]
})

// const postcssImport = require(`postcss-import`)
// const postcssCssNext = require(`postcss-cssnext`)
// const postcssBrowserReporter = require(`postcss-browser-reporter`)
// const postcssReporter = require(`postcss-reporter`)
// module.exports = () => ({
//   plugins: [
//     postcssImport(),
//     postcssCssNext(),
//     postcssBrowserReporter(),
//     postcssReporter(),
//   ],
// })