# ✂️ truncated [![Build Status](https://travis-ci.org/hcjk/truncated.svg?branch=master)](https://travis-ci.org/hcjk/truncated)

Truncates all strings in an array to the minimum length required to keep them unique.

Uses UMD module declaration. See https://github.com/umdjs/umd/blob/master/templates/returnExports.js

The module will load as a single global function "truncate" in a browser. Will return as a node module function in node. Works with AMD.

## Usage

```javascript
const truncated = require('truncated');

const longArray = ['monday', 'tuesday', 'wednesday'];
const short = truncated(longArray);
// ['m', 't', 'w'] 🙌
```

## Install

```shell
$ yarn add truncated
```

## Test

```shell
$ yarn test
```

## Contributors
- [Henry Kaufman](https://henrykaufman.me) - Designer and Developer
- [Jake Billings](https://jakebillings.com) - Full-stack Web Developer

## License

MIT © [Henry Kaufman](https://github.com/hcjk>)