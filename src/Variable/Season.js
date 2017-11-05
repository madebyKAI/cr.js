class Season {
    constructor(data) {
        this.number = data.seasonNumber;
        this.highest = data.seasonHighest;
        this.ending = data.seasonEnding;
        this.endGlobal = data.seasonEndGlobalRank;
    }
}

module.exports = Season;