# prejss-styles-loader

Styles loader for PreJSS and Webpack. 

## Installation

```sh
npm i -D prejss-styles-loader
```
or
```sh
yarn add -D prejss-styles-loader
```

## Usage example

```js
import injectSheet from 'react-jss'

import style from './style.sss'

const App = () => ...

...

export default injectSheet(style)(App)
```

*styles.sss*
```stylus
.app
  position: absolute
  top: 0
  left: 0
```

### Webpack

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
