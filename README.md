[![NPM][large-badge]][stats-link]

# cr.js
Simple clash royale API Wrapper.

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

### cr.getProfile(key) ⇒ Promise\<Object>
**Returns:** Promise\<Object> : Profile / Profiles.

| Param | Type      | Description                                                         |
| ----- | --------- | ------------------------------------------------------------------- |
| tag   | str / obj | Required. The tag(s) from which the profile(s) will be pulled from. |

### cr.getClan(key) ⇒ <code>Promise\<Object\></code>
**Returns:** Promise\<Object\> : Clan / Clans.

| Param | Type      | Description                                                      |
| ----- | --------- | ---------------------------------------------------------------- |
| tag   | str / obj | Required. The tag(s) from which the clan(s) will be pulled from. |

### cr.getTopClans(limit = 100) ⇒ <code>Promise/<Object/></code>
**Returns:** <code>Promise\<Object\></code> : Clan / Clans.

| Param | Type | Description                                             |
| ----- | ---- | ------------------------------------------------------- |
| limit | int  | Optinal. The limit of how many top clans will be pulled |

> The limit value defaults to 100.

[npm]: https://www.npmjs.com/package/cr.js
[large-badge]: https://nodei.co/npm/cr.js.png?downloads=true&downloadRank=true&stars=true
[stats-link]: https://nodei.co/npm/cr.js/
