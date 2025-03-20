// priority: 0
// requires: oreganized
ServerEvents.recipes(recipes => {
  recipes.remove([
    'oreganized:netherite_nugget',
    'oreganized:quark/glance_pillar_stonecutter',
    'oreganized:quark/glance_brick_vertical_slab_stonecutter'
  ]);
})