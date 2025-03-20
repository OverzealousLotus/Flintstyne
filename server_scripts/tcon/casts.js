// priority: 0
// requires: tconstruct
// requires: glintstyne
function flintCast(recipes, fluid, result, cast) {
  recipes.custom({
    type: 'tconstruct:casting_table',
    cast: cast,
    cooling_time: 57,
    cast_consumed: true,
    fluid: {
      fluid: 'flintstyne:molten_' + fluid,
      amount: 90
    },
    result: 'flintstyne:' + result + '_cast',
    switch_slots: true
  });
}

function blackCast(recipes, fluid, result, cast) {
  recipes.custom({
    type: 'tconstruct:casting_table',
    cast: cast,
    cooling_time: 57,
    cast_consumed: true,
    fluid: {
      fluid: fluid,
      amount: 90
    },
    result: result + '_cast',
    switch_slots: true
  });
}


ServerEvents.recipes(recipes => {
  flintCast(recipes, 'mochite', 'ingot_mochite', { tag: 'forge:ingots' });
  flintCast(recipes, 'mochite', 'adze_head_mochite', { type: 'tconstruct:material', item: 'tconstruct:adze_head'});
  flintCast(recipes, 'mochite', 'nugget_mochite', { tag: 'forge:nuggets'});
  flintCast(recipes, 'mochite', 'gem_mochite', { tag: 'forge:gems' });
});