class CardInfo {
    constructor(data) {
        this.cardId = data.card_id
        this.name = data.name;
        this.elixir = data.elixir;
        this.type = data.type;
        this.rarity = data.rarity;
        this.arena = data.arena;
        this.description = data.description;
    }
}

module.exports = CardInfo;