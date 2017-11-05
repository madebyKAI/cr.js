let Allience = require('./Alliance.js')
let CardInfo = require('./CardInfo.js')
let Country = require('./Country.js')
let Rarity = require('./Rarity.js')

class Constant {
    constructor(data) {
        this.clan = new Allience(data.alliance);
        this.cards = data.cards.map(d => new CardInfo(d))
        this.cycle = data.chestCycle.order;
        this.badges = data.badges;
        this.country = data.countryCodes.map(d => new Country(d));
        this.rarity = data.rarities.map(d => new Rarity(d))
    }
}

module.exports = Constant;