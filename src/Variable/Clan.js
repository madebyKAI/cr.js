let Member = require('./Member.js');
let ClanChest = require('./ClanChest.js');

class Clan {
    constructor(data) {
        this.name = data.name;
        this.trophies = data.score;
        this.requiredTrophies = data.requiredScore;
        this.donations = data.donations;
        this.rank = data.currentRank;
        this.description = data.description;
        this.type = data.type;
        this.region = data.region.name;
        this.clanChest = new ClanChest(data.clanChest);
        this.members = data.members.map(d => new Member(d));
    }
}

module.exports = Clan;