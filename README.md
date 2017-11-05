<p align="center">
  <img src="https://cdn.dribbble.com/users/285333/screenshots/2602589/shield.jpg" width="350" href="https://www.npmjs.com/package/cr.js"/>
</p>

<h1 align="center">
<a href="https://www.npmjs.com/package/cr.js">cr.js</a>
</h1>
<p align="center">
Simple clash royale API Wrapper.
</p>
    
<h2 align="center">
Installing
</h2>

```
npm i --s cr.js
```

<h2 align="center">
Examples
</h2>

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

------------------------------------------------------

### cr.getProfile(key) ⇒ <code>Promise\<Object></code>
**Returns:** <code>Promise\<Object></code>

| Param | Type      | Description                                                         |
| ----- | --------- | ------------------------------------------------------------------- |
| tag   | str / obj | Required. The tag(s) from which the profile(s) will be pulled from. |

### cr.getClan(key) ⇒ <code>Promise\<Object\></code>
**Returns:** <code>Promise\<Object\></code>

| Param | Type      | Description                                                      |
| ----- | --------- | ---------------------------------------------------------------- |
| tag   | str / obj | Required. The tag(s) from which the clan(s) will be pulled from. |

### cr.getTopClans(limit = 100) ⇒ <code>Promise\<Object\></code>
**Returns:** <code>Promise\<Object\></code>

| Param | Type | Description                                             |
| ----- | ---- | ------------------------------------------------------- |
| limit | int  | Optinal. The limit of how many top clans will be pulled |

> The limit value defaults to 100.
