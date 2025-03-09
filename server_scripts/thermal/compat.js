// priority: 0
// requires: thermal
// requires: biomesoplenty
const angiosperms = [
  'minecraft:poppy',
  'minecraft:oxeye_daisy',
  'minecraft:peony',
  'minecraft:allium',
  'biomesoplenty:lavender'
]

ServerEvents.tags('item', tags => {
  tags.add('flintstyne:angiosperm', angiosperms);
});

ServerEvents.recipes(recipes => {
  recipes.recipes.thermal.press(Fluid.of('thermal:latex', 50), { tag: 'flintstyne:angiosperm' })
    .energy(400).xp(0.15);
})