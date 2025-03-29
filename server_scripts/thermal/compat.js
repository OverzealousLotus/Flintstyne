// priority: 0
// requires: thermal
// requires: biomesoplenty
// requires: supplementaries
const ANGIOSPERMS = [
  'minecraft:poppy',
  'minecraft:oxeye_daisy',
  'minecraft:peony',
  'minecraft:allium',
  'biomesoplenty:lavender'
];

const FOSSIL_FUELS = [
  'minecraft:coal',
  'minecraft:charcoal'
];

ServerEvents.tags('item', tags => {
  tags.add('flintstyne:angiosperm', ANGIOSPERMS);
  tags.add('minecraft:coals', FOSSIL_FUELS);
});

ServerEvents.recipes(recipes => {
  recipes.recipes.thermal.press(
    Fluid.of('thermal:latex', 50), { tag: 'flintstyne:angiosperm' }, 0.15, 400
  );
  recipes.recipes.thermal.press('spelunkery:charcoal_lump', 'supplementaries:ash');
  recipes.remove('thermal:machines/pyrolyzer/pyrolyzer_coal');
  recipes.recipes.thermal.pyrolyzer([
    'thermal:coal_coke', Item.of('thermal:tar').withChance(0.25), Fluid.of('thermal:creosote', 250)
  ], { tag: 'flintstyne:fossil_fuel' }, 0.15
  );
})