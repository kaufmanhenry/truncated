# ✂️ truncated [![Build Status](https://travis-ci.org/hcjk/truncated.svg?branch=master)](https://travis-ci.org/hcjk/truncated)

Truncates all strings in an array to the minimum length required to keep them unique.

Uses [UMD module declaration](https://github.com/umdjs/umd/blob/master/templates/returnExports.js).

The module will load as a single global function "truncated" in a browser. Will return as a node module function in node. Works with AMD.

## Usage

#### Example with all first elements unique

```javascript
const truncated = require('truncated');

const longArray = ['monday', 'tuesday', 'wednesday'];
const short = truncated(longArray);
// ['m', 't', 'w'] 🙌
```

#### Example with second elements unique

```javascript
const truncated = require('truncated');

const longArray = ['monday', 'tuesday', 'wednesday', 'thursday'];
const short = truncated(longArray);
// ['mo', 'tu', 'we', 'th'] 🙌
```

## What's going on here?

`truncated` is taking in all arguments passed as an array, and returning the first minimum instance in which each index is unique.

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