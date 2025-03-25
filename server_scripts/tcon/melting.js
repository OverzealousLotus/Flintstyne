// priority: 0
// requires: tconstruct
// requires: glintstyne
const MOCHITE_TEMP = 900;

function melting(recipes, ingredient, result, temp, time) {
  recipes.custom({
    type: "tconstruct:melting",
    ingredient: ingredient,
    result: result,
    temperature: temp,
    time: time
  });
}

function ore_melting(recipes, ingredient, rate, result, byproducts, temp, time) {
  recipes.custom({
    type: "tconstruct:melting",
    ingredient: ingredient,
    rate: rate,
    result: result,
    byproducts: byproducts,
    temperature: temp,
    time: time
  });
}

ServerEvents.recipes(recipes => {
  melting(recipes, { item: 'glintstyne:mochite'},
    { amount: 100, fluid: 'flintstyne:molten_mochite'}, MOCHITE_TEMP, 70
  );
  melting(recipes, { item: 'glintstyne:mochite_block'},
    { amount: 900, fluid: 'flintstyne:molten_mochite'}, MOCHITE_TEMP, 220
  );
  ore_melting(recipes, { item: 'glintstyne:raw_mochite' }, 'gem',
    { amount: 100, fluid: 'flintstyne:molten_mochite' },
    [ { amount: 25, rate: 'gem', fluid: 'tconstruct:molten_diamond' } ],
    MOCHITE_TEMP, 70
  );
  ore_melting(recipes, { item: 'glintstyne:raw_mochite_block' }, 'gem',
    { amount: 900, fluid: 'flintstyne:molten_mochite' },
    [ { amount: 450, rate: 'gem', fluid: 'tconstruct:molten_diamond' } ],
    MOCHITE_TEMP, 180
  );
  ore_melting(recipes, { item: 'glintstyne:mochite_ore' }, 'gem',
    { amount: 200, fluid: 'flintstyne:molten_mochite' },
    [ { amount: 50, rate: 'gem', fluid: 'tconstruct:molten_diamond' } ],
    MOCHITE_TEMP, 110
  );
  ore_melting(recipes, { item: 'glintstyne:deepslate_mochite_ore' }, 'gem',
    { amount: 200, fluid: 'flintstyne:molten_mochite' },
    [ { amount: 50, rate: 'gem', fluid: 'tconstruct:molten_diamond' } ],
    MOCHITE_TEMP, 110
  );
});