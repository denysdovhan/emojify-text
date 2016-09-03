
![image](https://cloud.githubusercontent.com/assets/3459374/18203241/576ce2dc-711e-11e6-9015-47fd3f5a1a94.png)

# emojify-text

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coveralls Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-image]][depstat-url]

> Convert boring text to wonderful emojis

This package was made just for fun. [Мe](https://github.com/denysdovhan) and [Serhiy Boreyko](https://github.com/jestersunborn) were build that funny utility in the train while we were going home after [LvivJS'2016](http://www.lvivjs.org.ua/) conference. Actually, that was cool timekiller.

## Install

    npm install --save emojify-text

## Usage

```js
import emojifyText from 'emojify-text';

emojifyText({ bg: '⭐️', fg: '💙' }, 'yay') //>
// ⭐️⭐️⭐️⭐️⭐️⭐️⭐️
// ⭐️💙⭐️⭐️⭐️💙⭐️
// ⭐️⭐️💙⭐️💙⭐️⭐️
// ⭐️⭐️⭐️💙⭐️⭐️⭐️
// ⭐️⭐️⭐️💙⭐️⭐️⭐️
// ⭐️⭐️⭐️💙⭐️⭐️⭐️
// ⭐️⭐️⭐️⭐️⭐️⭐️⭐️
// ⭐️⭐️⭐️⭐️⭐️⭐️⭐️
// ⭐️⭐️⭐️💙⭐️⭐️⭐️
// ⭐️⭐️💙⭐️💙⭐️⭐️
// ⭐️💙⭐️⭐️⭐️💙⭐️
// ⭐️💙💙💙💙💙⭐️
// ⭐️💙⭐️⭐️⭐️💙⭐️
// ⭐️⭐️⭐️⭐️⭐️⭐️⭐️
// ⭐️⭐️⭐️⭐️⭐️⭐️⭐️
// ⭐️💙⭐️⭐️⭐️💙⭐️
// ⭐️⭐️💙⭐️💙⭐️⭐️
// ⭐️⭐️⭐️💙⭐️⭐️⭐️
// ⭐️⭐️⭐️💙⭐️⭐️⭐️
// ⭐️⭐️⭐️💙⭐️⭐️⭐️
// ⭐️⭐️⭐️⭐️⭐️⭐️⭐️
```

The function is curried as default. That means you could prepare settings and use the result function like this:

```js
import emojifyText from 'emojify-text'

const emojify = emojifyText({
  background: '🍏',
  foreground: '🍎',
  row: true
})

emojify('yay!') //>
// 🍏🍏🍏🍏🍏🍏🍏🍏🍏🍏🍏🍏🍏🍏🍏🍏🍏🍏🍏🍏🍏🍏🍏🍏🍏🍏🍏🍏
// 🍏🍎🍏🍏🍏🍎🍏🍏🍏🍏🍎🍏🍏🍏🍏🍎🍏🍏🍏🍎🍏🍏🍏🍏🍎🍏🍏🍏
// 🍏🍏🍎🍏🍎🍏🍏🍏🍏🍎🍏🍎🍏🍏🍏🍏🍎🍏🍎🍏🍏🍏🍏🍏🍎🍏🍏🍏
// 🍏🍏🍏🍎🍏🍏🍏🍏🍎🍏🍏🍏🍎🍏🍏🍏🍏🍎🍏🍏🍏🍏🍏🍏🍎🍏🍏🍏
// 🍏🍏🍏🍎🍏🍏🍏🍏🍎🍎🍎🍎🍎🍏🍏🍏🍏🍎🍏🍏🍏🍏🍏🍏🍏🍏🍏🍏
// 🍏🍏🍏🍎🍏🍏🍏🍏🍎🍏🍏🍏🍎🍏🍏🍏🍏🍎🍏🍏🍏🍏🍏🍏🍎🍏🍏🍏
// 🍏🍏🍏🍏🍏🍏🍏🍏🍏🍏🍏🍏🍏🍏🍏🍏🍏🍏🍏🍏🍏🍏🍏🍏🍏🍏🍏🍏
```

## API

### emojifyText(options, input)

Return a string which is generated based on `input` and provided `options`.
If `input` is not provided, then it will return a function that takes `input`.

#### options

_Required_  
Object with options.

#### background

Type: `String`  
Default: `0`

A character to be a background for text.  
Alias: `bg` (`background` has higher priority than `bg`).

#### foreground

Type: `String`  
Default: `1`

A character to be a background as text.  
Alias: `fg` (`foreground` has higher priority than `fg`).

#### row

Type: `Boolean`  
Default: `false`

Render text in row or not.

#### dictionary

Type: `Object`  
Default: [embedded dictionary](./characters.json)

### input

_Required_  
Type: `String`  

Text which will be rendered as emojis.

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
