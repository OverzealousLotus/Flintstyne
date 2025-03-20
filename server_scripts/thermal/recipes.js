// priority: 0
// requires: thermal
ServerEvents.recipes(recipes => {
  recipes.remove([
    'thermal:storage/potato_block',
    'thermal:storage/apple_block',
    'thermal:storage/carrot_block',
    'thermal:storage/beetroot_block',
    'thermal:storage/netherite_nugget_from_ingot',
    'thermal:storage/steel_block',
    'thermal:storage/copper_ingot_from_nuggets',
    'thermal:storage/charcoal_block',
    'thermal:storage/gunpowder_block',
    'thermal:storage/sugar_cane_block',
    'thermal:storage/steel_ingot_from_nuggets',
    'thermal:storage/copper_nugget_from_ingot'
  ]);
});

