const { asyncParser } = require('prejss-postcss-parser')

function loader(source) {
  if (!source) return

  this.cacheable()

  const callback = this.async()


  asyncParser(source)
    .then(styles => callback(null, `module.exports = ${JSON.stringify(styles)};`))
    .catch(callback)
}

module.exports = loader
