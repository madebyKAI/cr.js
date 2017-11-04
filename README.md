[![NPM][large-badge]][stats-link]

# cr.js
Simple clash royale API Wrapper

## Installing

```
npm i --s cr.js
```

## Examples

```javascript
const cr = require('cr.js');

cr.getProfile([
    'L88P2282',
    '9CQ2U8QJ',
    '8L9L9GL'
]).then(json => console.log(json))
```

```javascript
const cr = require('cr.js');

cr.getClan('2CCCP').then(json => console.log(json));
```

```javascript
const cr = require('cr.js');

cr.getTopClans(10).then(json => console.log(json))
```



[npm]: https://www.npmjs.com/package/cr.js
[large-badge]: https://nodei.co/npm/cr.js.png?downloads=true&downloadRank=true&stars=true
[stats-link]: https://nodei.co/npm/cr.js/
