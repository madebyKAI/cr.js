class Arena {
    constructor(data) {
        this.name = data.name;
        this.number = data.arenaID;
        this.limit = data.trophyLimit
        this.imageUrl = `http://api.cr-api.com${data.imageURL}`
    }
}

module.exports = Arena;