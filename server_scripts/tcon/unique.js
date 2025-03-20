// priority: 0
// requires: tconstruct
// requires: glintstyne

function single_cast_gem(recipes, fluid, result) {
  recipes.custom({
    type: 'tconstruct:casting_table',
    cast: { tag: 'tconstruct:casts/single_use/gem' },
    cooling_time: 83,
    cast_consumed: true,
    fluid: {
      fluid: fluid,
      amount: 100
    },
    result: result
  });
}

function multi_cast_gem(recipes, fluid, result) {
  recipes.custom({
    type: 'tconstruct:casting_table',
    cast: { tag: 'tconstruct:casts/multi_use/gem' },
    cooling_time: 83,
    cast_consumed: false,
    fluid: {
      fluid: fluid,
      amount: 100
    },
    result: result
  });
}

ServerEvents.recipes(recipes => {
  single_cast_gem(recipes, 'flintstyne:molten_mochite', 'glintstyne:mochite');
  multi_cast_gem(recipes, 'flintstyne:molten_mochite', 'glintstyne:mochite');
});