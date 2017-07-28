# ✂️ truncated [![Build Status](https://travis-ci.org/hcjk/truncated.svg?branch=master)](https://travis-ci.org/hcjk/truncated>)

Truncate string arrays.

## Install

```shell
$ yarn add truncated
```

## Usage

```javascript
const truncated = require('truncated');

const longArray = ['monday', 'tuesday', 'wednesday'];
const short = truncated(longArray);
// ['m', 't', 'w'] 🙌
```

## License

MIT © [Henry Kaufman](https://github.com/hcjk>)