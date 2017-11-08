let { get } = require('snekfetch');
let Profile = require('./Profile.js');
let Arena = require('./Arena.js')

class Member {
    constructor(data) {
        this._BASE = 'http://api.cr-api.com';
        this.name = data.name;
        this.arena = new Arena(data.arena)
        this.role = data.role;
        this.roleName = data.roleName;
        this.level = data.expLevel;
        this.trophies = data.trophies;
        this.donations = data.donations;
        this.currentRank = data.currentRank;
        this.previousRank = data.previousRank;
        this.clanChestCrowns = data.clanChestCrowns;
        this.tag = data.tag;
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

    getProfile() {
        return new Promise((res, rej) => {
            this.request(`${this._BASE}/profile/${this.tag}`).then(data => {
                res(new Profile(data));
            }).catch(e => {
                rej(e);
            })
        })
    }
}

module.exports = Member;
