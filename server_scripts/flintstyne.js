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
  recipes.shapeless('minecraft:ancient_debris', '9x flintstyne:small_ancient_shard');
  recipes.shapeless('caverns_and_chasms:spinel', '9x flintstyne:spinel_shard');
  recipes.shapeless('flintstyne:rough_spinel', '9x flintstyne:rough_spinel_shard');
  recipes.shapeless('flintstyne:rough_spinel_block', '9x flintstyne:rough_spinel');
  recipes.shapeless('9x flintstyne:rough_spinel', 'flintstyne:rough_spinel_block')
  recipes.shapeless('9x flintstyne:rough_spinel_shard', 'flintstyne:rough_spinel')
});

ServerEvents.tags('item', tags => {
  tags.add('spelunkery:grindable', 'flintstyne:rough_spinel');
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
  loot.addBlockLootModifier(['caverns_and_chasms:spinel_ore', 'caverns_and_chasms:deepslate_spinel_ore']).removeLoot(Ingredient.all)
    .addLoot([
      LootEntry.of('flintstyne:rough_spinel'),
      LootEntry.of('flintstyne:rough_spinel_shard').when(rand => rand.randomChance(0.35)),
      LootEntry.of('flintstyne:rough_spinel_shard').when(rand => rand.randomChance(0.35)),
      LootEntry.of('flintstyne:rough_spinel_shard').when(rand => rand.randomChance(0.25))
    ]
  );
});