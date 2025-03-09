// priority: 0
// requires: iceandfire
ServerEvents.recipes(recipes => {
  recipes.remove({ id: "iceandfire:armor_silver_metal_helmet" });
  recipes.remove({ id: "iceandfire:armor_silver_metal_chestplate" });
  recipes.remove({ id: "iceandfire:armor_silver_metal_leggings" });
  recipes.remove({ id: "iceandfire:armor_silver_metal_boots" });

  recipes.remove({ id: "iceandfire:silver_sword" });
  recipes.remove({ id: "iceandfire:silver_shovel" });
  recipes.remove({ id: "iceandfire:silver_pickaxe" });
  recipes.remove({ id: "iceandfire:silver_axe" });
  recipes.remove({ id: "iceandfire:silver_hoe" });

  recipes.remove({ id: "iceandfire:copper_nuggets_to_ingot" });
  recipes.remove({ id: "iceandfire:copper_ingot_to_nuggets" });
})