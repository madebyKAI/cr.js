let { get } = require('snekfetch');
let Profile = require('./Profile.js');
let Clan = require('./Clan.js')
let Constant = require('../Constant/Constant.js')

module.exports = class Client {
    constructor() {
        this._BASE = 'http://api.cr-api.com';
    }

    request(url) {
        return new Promise((res, rej) => {
            get(url)
                .then(body => {
                    switch(body.status) {
                        case 400:
                            rej('Error Code 400: Bad Request');
                        case 404:
                            rej('Error Code 404: Not Found');
                        case 500:
                            rej('Error Code 500: Internal Server Error');
                        case 503:
                            rej('Error Code 503: Service Unavailable');
                        case 200:
                            res(body.body);
                    }
                })
                .catch(err => {
                    rej(err);
                });
        })
    }

    getProfile(tag) {
        return new Promise((res, rej) => {
            let tags = typeof tag === 'string' ? `${tag}`.replace('#', '') : tag.map(t => t.replace('#', '')).join(',');
            this.request(`${this._BASE}/profile/${tag}`).then(data => {
                res(new Profile(data))
            }).catch(err => rej(err));
        })
    }

    getClan(tag) {
        return new Promise((res, rej) => {
            let tags = typeof tag === 'string' ? `${tag}`.replace('#', '') : tag.map(t => t.replace('#', '')).join(',');
            this.request(`${this._BASE}/clan/${tag}`).then(data => {
                res(new Clan(data));
            }).catch(err => rej(err));
        })
    }

    getConstants() {
        return new Promise((res, rej) => {
            this.request(`${this._BASE}/constants`).then(data => {
                res(new Constant(data))
            })
        }).catch(err => rej(err));
    }
}