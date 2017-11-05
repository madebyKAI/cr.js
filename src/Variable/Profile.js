let { get } = require('snekfetch');
let Clan = require('./Clan.js')
let Arena = require('./Arena.js')
let Cycle = require('./Cycle.js')
let Shop = require('./Shop.js')
let Card = require('./Card.js')
let Season = require('./Season.js')

class Profile {
    constructor(data) {
        this._BASE = 'http://api.cr-api.com';
        this.tag = data.tag;
        this.name = data.name;
        this.trophies = data.trophies;
        this.arena = new Arena(data.arena);
        this.legendaryTrophies = data.legendaryTrophies;
        this.nameChanged = data.nameChanged;
        this.globalRank = data.globalRank ? data.globalRank : null;
        this.level = data.experience.level;
        this.xp = [data.experience.xp, data.experience.xpRequiredForLevelUp]
        this.tournamentCardsWon = data.stats.tournamentCardsWon;
        this.highestTrophies = data.stats.maxTrophies;
        this.threeCrownWins = data.stats.threeCrownWins;
        this.cardsFound = data.stats.cardsFound;
        this.favouriteCard = data.stats.favoriteCard;
        this.totalDonations = data.stats.totalDonations;
        this.challengeMaxWins = data.stats.challengeMaxWins;
        this.challengeCardsWon = data.stats.challengeCardsWon;
        this.totalGames = data.games.total;
        this.tournamentGames = data.games.tournamentGames;
        this.wins = data.games.wins;
        this.losses = data.games.losses;
        this.draws = data.games.draws;
        this.currentWinStreak = data.games.currentWinStreak;
        this.chestCycle = new Cycle(data.chestCycle);
        this.chestCyclePosition = data.chestCycle.position;
        this.deck = data.currentDeck.map(d => new Card(d))
        this.clanTag = data.clan ? data.clan.tag : null;
        this.clanName = data.clan ? data.clan.name : null;
        this.clanRole = data.clan ? data.clan.role : null;
        this.clanBadge = data.clan ? `http://api.cr-api.com${data.clan.badge.url}` : null;
        this.shopOffers = new Shop(data.shopOffers)
        this.seasons = data.previousSeasons ? data.previousSeasons.map(d => new Season(d)) : null;
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

    getClan() {
        return new Promise((res, rej) => {
            if(!this.clanTag) {
                rej('Player not in clan');
            }
            this.request(`${this._BASE}/clan/${this.clanTag}`).then(data => {
                res(new Clan(data))
            }).catch(err => rej(err));
        })
    }
}


module.exports = Profile;