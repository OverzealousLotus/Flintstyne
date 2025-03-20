// priority: 0
// requires: twigs
ServerEvents.recipes(recipes => {
  recipes.remove([
    'twigs:calcite_stairs',
    'twigs:calcite_wall',
    'twigs:polished_amethyst',
    'twigs:tuff_wall',
    'twigs:tuff_stairs',
    'twigs:cobblestone_bricks',
    'twigs:mossy_cobblestone_bricks_cobblestone'
  ]);
})