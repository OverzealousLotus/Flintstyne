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

  recipes.remove({ id: "swem:rosette_blue" });
  recipes.remove({ id: "swem:rosette_red" });
  recipes.remove({ id: "swem:rosette_yellow" });
  recipes.remove({ id: "swem:rosette_green" });
  recipes.remove({ id: "swem:rosette_cyan" });
  recipes.remove({ id: "swem:rosette_pink" });
  recipes.remove({ id: "swem:rosette_white" });
  recipes.remove({ id: "swem:rosette_black" });
  recipes.remove({ id: "swem:rosette_magenta" });
  recipes.remove({ id: "swem:rosette_brown" });
  recipes.remove({ id: "swem:rosette_orange" });
  recipes.remove({ id: "swem:rosette_lime" });
  recipes.remove({ id: "swem:rosette_gray" });
  recipes.remove({ id: "swem:rosette_light_gray" });
  recipes.remove({ id: "swem:rosette_purple" });
  recipes.remove({ id: "swem:rosette_light_blue" });
  
  coinFix('copper_ingot');
  coinFix('iron_ingot');
  coinFix('gold_ingot');
  coinFix('netherite_ingot');
  coinFix('diamond');
  coinFix('emerald');
  coinFix('shining_amethyst_shard');
});