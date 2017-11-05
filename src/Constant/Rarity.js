class Rarity {
    constructor(data) {
        this.balanceMultiplier = data.balance_multiplier;
        this.chanceWeight = data.chance_weight;
        this.cloneRelativeLevel = data.clone_relative_level;
        this.donateCapacity = data.donate_capacity;
        this.donateReward = data.donate_reward;
        this.donateXP = data.donate_xp;
        this.goldConversionValue = data.gold_conversion_value;
        this.levelCount = data.levelCount;
        this.mirrorReletiveLevel = data.mirror_relative_level;
        this.name = data.name;
        this.powerLevelMultiplier = data.power_level_multiplier;
        this.refundGems = data.refund_gems;
        this.relativeLevel = data.relative_level;
        this.sortCapacity = data.sort_capacity;
        this.upgradeCost = data.upgrade_cost;
        this.upgradeXP = data.upgrade_exp;
        this.upgradeMaterialCount = data.upgrade_material_count;
    }
}

module.exports = Rarity;