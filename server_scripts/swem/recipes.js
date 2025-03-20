// priority: 0
// requires: swem
ServerEvents.recipes(recipes => {
  function coinFix(material) {
    recipes.replaceInput(
      { id: 'minecraft:' + material + '_to_coin' },
      'minecraft:iron_nugget',
      '#forge:nuggets/copper'
    );
  }

  recipes.remove([
    'swem:rosette_blue',
    'swem:rosette_red',
    'swem:rosette_yellow',
    'swem:rosette_green',
    'swem:rosette_cyan',
    'swem:rosette_pink',
    'swem:rosette_white',
    'swem:rosette_black',
    'swem:rosette_magenta',
    'swem:rosette_brown',
    'swem:rosette_orange',
    'swem:rosette_lime',
    'swem:rosette_gray',
    'swem:rosette_light_gray',
    'swem:rosette_purple',
    'swem:rosette_light_blue'
  ]);
  
  coinFix('copper_ingot');
  coinFix('iron_ingot');
  coinFix('gold_ingot');
  coinFix('netherite_ingot');
  coinFix('diamond');
  coinFix('emerald');
  coinFix('shining_amethyst_shard');
});