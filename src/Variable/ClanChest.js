class ClanChest {
    constructor(data) {
        this.crowns = data.clanChestCrowns;
        this.percent = data.clanChestCrownsPercent;
        this.required = data.clanChestCrownsRequired;
    }
}

module.exports = ClanChest;