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
Example
</h2>

```javascript
const cr = require('cr.js');

let client = new cr.Client();

client.getProfile('Y99YRPYG').then(player => console.log(player))
```
