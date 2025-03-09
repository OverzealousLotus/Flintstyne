// priority: 0
// requires: iceandfire
LootJS.modifiers(loot => {
  loot.addBlockLootModifier(['iceandfire:silver_ore', 'iceandfire:deepslate_silver_ore'])
    .removeLoot(Ingredient.all)
    .addLoot([
      LootEntry.of('oreganized:raw_silver'),
      LootEntry.of('spelunkery:raw_silver_nugget').when(rand => rand.randomChance(0.35)),
      LootEntry.of('spelunkery:raw_silver_nugget').when(rand => rand.randomChance(0.30)),
      LootEntry.of('spelunkery:raw_silver_nugget').when(rand => rand.randomChance(0.25)),
      LootEntry.of('spelunkery:raw_silver_nugget').when(rand => rand.randomChance(0.10))
    ]
  );
});