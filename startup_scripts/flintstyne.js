// priority: 0

StartupEvents.registry('block', blocks => {
  blocks.create('flintstyne:deepslate_ancient_ore').displayName('Deepslate Ancient Ore')
    .textureAll('flintstyne:block/deepslate_ancient_ore')
    .soundType(SoundType.DEEPSLATE)
    .requiresTool(true).hardness(30).resistance(1200)
    .tagBlock('minecraft:needs_diamond_tool').tagBlock('minecraft:mineable/pickaxe');
});

StartupEvents.registry('item', items => {
  items.create('flintstyne:small_ancient_shard').displayName('Small Ancient Shard')
    .texture('flintstyne:item/small_ancient_shard');
  items.create('flintstyne:large_ancient_shard').displayName('Large Ancient Shard')
    .texture('flintstyne:item/large_ancient_shard');
});

StartupEvents.registry('fluid', fluids => {
  fluids.create('flintstyne:molten_mochite')
  .color(0xE2BDEC)
  .bucketColor(0xE2BDEC)
  .stillTexture('tconstruct:fluid/molten/still')
  .flowingTexture('tconstruct:fluid/molten/flowing')
  .displayName('Molten Mochite');
})