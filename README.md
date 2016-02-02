# shasta-logger [![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url]


## Install

```
npm install shasta-logger
```

## Considerations

- Logging is done using `console.debug`
- There is no configuration, this is by design.
  - If you want more granular configuration, use [redux-logger](https://github.com/fcomb/redux-logger)

## Example

Use the logger function as middleware in your store.

### ES6

```js
import { createStore } from 'shasta'
import logger from 'shasta-logger'

// you get the point
let store = createStore({
  reducer: reducer,
  middleware: [
    otherStuff,
    logger
  ]
})
```

[downloads-image]: http://img.shields.io/npm/dm/shasta-logger.svg
[npm-url]: https://npmjs.org/package/shasta-logger
[npm-image]: http://img.shields.io/npm/v/shasta-logger.svg

[travis-url]: https://travis-ci.org/shastajs/shasta-logger
[travis-image]: https://travis-ci.org/shastajs/shasta-logger.png?branch=master
