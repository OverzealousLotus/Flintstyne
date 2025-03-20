// priority: 0
ServerEvents.recipes(recipes => {
  recipes.shaped(Item.of('minecraft:ancient_debris', 1),
    [
      'SS',
      'SS'
    ],
    {
      S: 'flintstyne:large_ancient_shard'
    }
  );
  recipes.shapeless(Item.of('minecraft:ancient_debris', 1), '9x flintstyne:small_ancient_shard');
  
});

LootJS.modifiers(loot => {
  loot.addBlockLootModifier('flintstyne:deepslate_ancient_ore').removeLoot(Ingredient.all)
    .addLoot([
      LootEntry.of('flintstyne:small_ancient_shard'),
      LootEntry.of('flintstyne:small_ancient_shard').when(rand => rand.randomChance(0.35)),
      LootEntry.of('flintstyne:small_ancient_shard').when(rand => rand.randomChance(0.35)),
      LootEntry.of('flintstyne:large_ancient_shard').when(rand => rand.randomChance(0.25))
    ]
  );
});