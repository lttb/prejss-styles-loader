const postjssAsync = require('postjss/runtime/async').default


function loader(source) {
  this.cacheable()

  const callback = this.async()

  postjssAsync.then(postjss => postjss(source))
    .then(styles => callback(null, `module.exports = ${JSON.stringify(styles)};`))
    .catch(callback)
}


module.exports = loader
