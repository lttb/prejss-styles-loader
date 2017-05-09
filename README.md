# prejss-styles-loader

Styles loader for Webpack on top of [PreJSS](https://github.com/axept/prejss).

Process stylesheets from separate files via PostCSS to the JSS-like objects.

## Installation

```sh
npm i -D prejss-styles-loader
```
or
```sh
yarn add prejss-styles-loader -D
```

## Usage example

```js
import injectSheet from 'react-jss'

// this style would become to JSS object literal
import style from './style.css'

const App = () => // ...

// ...

export default injectSheet(style)(App)
```

*styles.css*
```stylus
app {
  position: absolute;
  top: 0;
  left: 0;
}
```

### Webpack config example

```js
rules: [{
  test: /\.s[ac]?ss$/,
  include: [
    PATHS.app,
  ],
  use: [
    'prejss-styles-loader',
  ],
}]
```

## Links
- [PreJSS](https://github.com/axept/prejss)


## License
MIT
