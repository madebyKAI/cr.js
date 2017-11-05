let cr = require('./index.js');

let client = new cr.Client();
//console.log(cr)
//console.log(cr.Profile)

//8JRQG29YP
//Y99YRPYG

client.getProfile('Y99YRPYG').then(p => {
    //console.log(p.seasons)
    p.getClan().then(c => {
        //console.log(c.clanChest);
    })
})

client.getClan('2CCCP').then(c => {
    //console.log(c)
})

client.getConstants().then(c => {
    console.log(c)
})

//.catch(e => console.log(e))

//client.getClan('2CCCP');