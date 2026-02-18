// priority: 0

StartupEvents.registry("block", (blocks) => {
  blocks
    .create("flintstyne:rough_spinel_block")
    .displayName("Rough Spinel Block")
    .textureAll("flintstyne:block/rough_spinel_block")
    .soundType(SoundType.DEEPSLATE)
    .requiresTool(true)
    .hardness(30)
    .resistance(1200)
    .tagBlock("minecraft:needs_diamond_tool")
    .tagBlock("minecraft:mineable/pickaxe");

  blocks
    .create("flintstyne:mantle")
    .displayName("Mantle")
    .textureAll("flintstyne:block/mantle")
    .soundType(SoundType.ANCIENT_DEBRIS)
    .requiresTool(true)
    .hardness(75)
    .resistance(1200)
    .tagBlock("minecraft:needs_diamond_tool")
    .tagBlock("minecraft:mineable/pickaxe");

});

StartupEvents.registry("item", (items) => {
  items
    .create("flintstyne:rough_spinel")
    .displayName("Rough Spinel")
    .texture("flintstyne:item/rough_spinel");
  items
    .create("flintstyne:rough_spinel_shard")
    .displayName("Rough Spinel Shard")
    .texture("flintstyne:item/rough_spinel_shard");
  items
    .create("flintstyne:spinel_shard")
    .displayName("Spinel Shard")
    .texture("flintstyne:item/spinel_shard");
});

StartupEvents.registry("fluid", (fluids) => {
  fluids
    .create("flintstyne:molten_mochite")
    .color(0xe2bdec)
    .bucketColor(0xe2bdec)
    .stillTexture("tconstruct:fluid/molten/still")
    .flowingTexture("tconstruct:fluid/molten/flowing")
    .displayName("Molten Mochite");
});
