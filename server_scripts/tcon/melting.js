// priority: 1
// requires: tconstruct
// requires: glintstyne
const DIAMOND_TEMP = 1450;
const MOCHITE_TEMP = 900;
const IRON_TEMP = 800;
const GOLD_TEMP = 700;

import { damagable, ore } from './common.js';

function melting(recipes, ingredient, result, temp, time) {
  recipes.custom({
    type: "tconstruct:melting",
    ingredient: ingredient,
    result: result,
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

  damagable(recipes, { item: 'aether:netherite_gloves' }, [
      { amount: 90, tag: 'forge:molten_netherite' },
      { amount: 400, fluid: 'tconstruct:molten_diamond' }
    ], 1250, 74
  );
  damagable(recipes, { item: 'aether:diamond_gloves'},
    { amount: 400, tag: 'tconstruct:molten_diamond', unit_size: 25}, DIAMOND_TEMP, 158
  );
  damagable(recipes, { item: 'aether:diamond_gloves'},
    { amount: 400, tag: 'tconstruct:molten_diamond', unit_size: 25}, DIAMOND_TEMP, 158
  );
  damagable(recipes, { item: 'aether:golden_gloves'},
    { amount: 360, tag: 'forge:molten_gold'}, GOLD_TEMP, 114
  );
  damagable(recipes, { item: 'aether:iron_gloves'},
    { amount: 360, tag: 'forge:molten_iron'}, IRON_TEMP, 120
  );
  damagable(recipes, { item: 'aether:chainmail_gloves'}, [
      { amount: 240, tag: 'forge:molten_iron'},
      { amount: 120, tag: 'forge:molten_steel' }
    ], 800, 98
  );
  
  ore(recipes, { item: 'glintstyne:raw_mochite' }, 'gem', [
      { amount: 100, fluid: 'flintstyne:molten_mochite' },
      [ { amount: 25, rate: 'gem', fluid: 'tconstruct:molten_diamond' } ]
    ], MOCHITE_TEMP, 70
  );
  ore(recipes, { item: 'glintstyne:raw_mochite_block' }, 'gem', [
      { amount: 900, fluid: 'flintstyne:molten_mochite' },
      [ { amount: 450, rate: 'gem', fluid: 'tconstruct:molten_diamond' } ]
    ], MOCHITE_TEMP, 180
  );
  ore(recipes, { item: 'glintstyne:mochite_ore' }, 'gem', [
      { amount: 200, fluid: 'flintstyne:molten_mochite' },
      [ { amount: 50, rate: 'gem', fluid: 'tconstruct:molten_diamond' } ]
    ], MOCHITE_TEMP, 110
  );
  ore(recipes, { item: 'glintstyne:raw_mochite_block' }, 'gem', [
      { amount: 200, fluid: 'flintstyne:molten_mochite' },
      [ { amount: 50, rate: 'gem', fluid: 'tconstruct:molten_diamond' } ]
    ], MOCHITE_TEMP, 110
  );
  ore(recipes, { item: 'glintstyne:deepslate_mochite_ore' }, 'gem', [
      { amount: 200, fluid: 'flintstyne:molten_mochite' },
      [ { amount: 50, rate: 'gem', fluid: 'tconstruct:molten_diamond' } ]
    ], MOCHITE_TEMP, 110
  );
});