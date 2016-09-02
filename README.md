
![image](https://cloud.githubusercontent.com/assets/3459374/18203241/576ce2dc-711e-11e6-9015-47fd3f5a1a94.png)

# emojify-text

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coveralls Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-image]][depstat-url]

> convert

## Install

    npm install --save emojify-text

## Usage

```js
import { emojifyText, emojifyTextAsync } from 'emojify-text';

emojifyText('unicorns'); // unicorns
emojifyTextAsync('unicorns')
  .then(result => console.log(result)); // unicorns
```

## API

### emojifyText(input, [options])

### emojifyTextAsync(input, [options])

Return a promise that resolves to `result`.

#### input

*Required*  
Type: `String`

Lorem ipsum.

#### options

##### foo

Type: `Boolean`  
Default: `false`

Lorem ipsum.

## License

MIT © [Denys Dovhan](http://denysdovhan.com)

[npm-url]: https://npmjs.org/package/emojify-text
[npm-image]: https://img.shields.io/npm/v/emojify-text.svg?style=flat-square

[travis-url]: https://travis-ci.org/denysdovhan/emojify-text
[travis-image]: https://img.shields.io/travis/denysdovhan/emojify-text.svg?style=flat-square

[coveralls-url]: https://coveralls.io/r/denysdovhan/emojify-text
[coveralls-image]: https://img.shields.io/coveralls/denysdovhan/emojify-text.svg?style=flat-square

[depstat-url]: https://david-dm.org/denysdovhan/emojify-text
[depstat-image]: https://david-dm.org/denysdovhan/emojify-text.svg?style=flat-square
