// priority: 0
// requires: farmersdelight
// requires: alexsmobs

ServerEvents.tags('item', tags => {
  tags.add('forge:egg', '#alexsmobs:toucan_breedables'); // Tag `alexsmobs` eggs with `#forge:egg`
  tags.add('c:chests/wooden', 'quark:spruce_chest');
});

ServerEvents.recipes(recipes => {
  recipes.replaceInput('farmersdelight:wheat_dough_from_water',
    'minecraft:water_bucket',
    '#forge:water'
  );
  recipes.replaceInput(['farmersdelight:wheat_dough_from_water', 'farmersdelight:wheat_dough_from_eggs'],
    'minecraft:wheat',
    '#forge:flour_plants'
  );
  recipes.recipes.create.crushing(['create:wheat_flour',
    Item.of('2x create:wheat_flour').withChance(0.25), Item.of('minecraft:wheat_seeds').withChance(0.25)],
    '#forge:flour_plants'
  );
});