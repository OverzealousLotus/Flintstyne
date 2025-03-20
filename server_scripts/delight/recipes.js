// priority: 0
// requires: farmersdelight
ServerEvents.recipes(recipes => {
  recipes.remove({ id: 'farmersdelight:carrot_crate' });
  recipes.remove({ id: 'farmersdelight:potato_crate' });
  recipes.remove({ id: 'farmersdelight:beetroot_crate' });
})