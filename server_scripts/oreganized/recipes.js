// priority: 0
// requires: oreganized
ServerEvents.recipes(recipes => {
  recipes.remove([
    { id: 'oreganized:netherite_nugget' },
    { id: 'oreganized:quark/glance_pillar_stonecutter'},
    { id: 'oreganized:quark/glance_brick_vertical_slab_stonecutter'},
  ]);
})