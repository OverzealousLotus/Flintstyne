// priority: 0
// requires: iceandfire
ServerEvents.recipes(recipes => {
  recipes.remove([
    'iceandfire:armor_silver_metal_helmet',
    'iceandfire:armor_silver_metal_chestplate',
    'iceandfire:armor_silver_metal_leggings',
    'iceandfire:armor_silver_metal_boots',

    'iceandfire:silver_sword',
    'iceandfire:silver_shovel',
    'iceandfire:silver_pickaxe',
    'iceandfire:silver_axe',
    'iceandfire:silver_hoe',

    'iceandfire:copper_nuggets_to_ingot',
    'iceandfire:copper_ingot_to_nuggets'
  ]);
});