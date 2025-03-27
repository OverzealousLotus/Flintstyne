// priority: 0
const MC_CHESTS = 'minecraft:chests/';
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

  recipes.recipes.thermal.press('spelunkery:charcoal_lump', 'supplementaries:ash');
});

ServerEvents.tags('item', tags => {
  tags.add('spelunkery:grindable', 'flintstyne:rough_spinel');
});

LootJS.modifiers(loot => {
  let CNC_TABLES = [
    'desert_pyramid', 'abandoned_mineshaft', 'jungle_temple', 'end_city_treasure',
    'buried_treasure', 'nether_bridge', 'shipwreck_treasure', 'simple_dungeon',
    'stronghold_corridor', 'stronghold_crossing', 'village/village_temple',
    'village/village_toolsmith', 'village/village/weaponsmith', 'woodland_mansion'
  ];
  CNC_TABLES.forEach((table, index) => CNC_TABLES[index] = MC_CHESTS + table);
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
  loot.addLootTableModifier(CNC_TABLES).removeLoot('caverns_and_chasms:silver_ingot');
});

ServerEvents.genericLootTables(tables => {
  tables.addJson('spelunkery:gameplay/grindstone_polishing/rough_spinel', {
    pools: [
      {
        rolls: 1,
        bonus_rolls: 0,
        entries: [
          {
            type: "minecraft:item",
            name: "caverns_and_chasms:spinel"
          }
        ]
      },
      {
        rolls: {
          min: 2,
          max: 4
        },
        bonus_rolls: 0,
        entries: [
          {
            type: "minecraft:item",
            name: "minecraft:experience_bottle"
          }
        ]
      },
      {
        rolls: 1,
        bonus_rolls: 0,
        entries: [
          {
            type: "minecraft:item",
            name: "minecraft:bedrock"
          }
        ]
      }
    ]
  });
});