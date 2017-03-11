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
