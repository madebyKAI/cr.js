class Card {
    constructor(data) {
        this.name = data.name;
        this.rarity = data.rarity;
        this.level = data.level;
        this.count = data.count;
        this.toUpdate = data.requiredForUpgrade;
        this.cardId = data.card_id;
        this.elixir = data.elixir;
        this.type = data.type;
        this.arena = data.arena;
        this.description = data.description;
        this.decklink = data.decklink;
    }
}

module.exports = Card;