// priority: 0
ServerEvents.recipes(recipes => {
  function bulkClear(output, input, isGem) {
    if (isGem) {
      recipes.remove({
        type: 'minecraft:blasting',
        mod: 'minecraft',
        output: 'minecraft:' + output
      });
      recipes.remove({
        type: 'minecraft:smelting',
        mod: 'minecraft',
        output: 'minecraft:' + output
      });
    } else {
      recipes.remove({
        type: 'minecraft:blasting',
        mod: 'minecraft',
        output: 'minecraft:' + output,
        not: { input: 'minecraft:' + input }
      });
      recipes.remove({
        type: 'minecraft:smelting',
        mod: 'minecraft',
        output: 'minecraft:' + output,
        not: { input: 'minecraft:' + input }
      });
    }
    
  }
  recipes.remove([
    'minecraft:dye_blue_wool',
    'minecraft:dye_light_blue_wool',
    'minecraft:dye_red_wool',
    'minecraft:dye_yellow_wool',
    'minecraft:dye_green_wool',
    'minecraft:dye_cyan_wool',
    'minecraft:dye_pink_wool',
    'minecraft:dye_white_wool',
    'minecraft:dye_black_wool',
    'minecraft:dye_magenta_wool',
    'minecraft:dye_brown_wool',
    'minecraft:dye_orange_wool',
    'minecraft:dye_lime_wool',
    'minecraft:dye_gray_wool',
    'minecraft:dye_light_gray_wool',
    'minecraft:dye_purple_wool',
  ]);

  bulkClear('iron_ingot', 'raw_iron', false);
  bulkClear('gold_ingot', 'raw_gold', false);
  bulkClear('copper_ingot', 'raw_copper', false);
  bulkClear('diamond', '', true);
  bulkClear('emerald', '', true);
  bulkClear('lapis_lazuli', '', true);

  recipes.remove([
    'minecraft:end_crystal',
    'minecraft:beacon',
    'minecraft:lead',
    'minecraft:magma_cream',
    'minecraft:cake',
    'minecraft:blue_dye',
    'minecraft:sticky_piston',
    'minecraft:daylight_detector'
  ])
})