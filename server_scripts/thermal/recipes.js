// priority: 0
// requires: thermal
ServerEvents.recipes(recipes => {
  recipes.remove({ id: "thermal:storage/potato_block" });
  recipes.remove({ id: "thermal:storage/apple_block" });
  recipes.remove({ id: "thermal:storage/carrot_block" });
  recipes.remove({ id: "thermal:storage/beetroot_block" });
  recipes.remove({ id: "thermal:storage/netherite_nugget_from_ingot" });
  recipes.remove({ id: "thermal:storage/steel_block" });
  recipes.remove({ id: "thermal:storage/copper_ingot_from_nuggets" });
  recipes.remove({ id: "thermal:storage/charcoal_block" });
  recipes.remove({ id: "thermal:storage/gunpowder_block" });
  recipes.remove({ id: "thermal:storage/sugar_cane_block" });
  recipes.remove({ id: "thermal:storage/steel_ingot_from_nuggets" });
  recipes.remove({ id: "thermal:storage/copper_nugget_from_ingot" });
});

