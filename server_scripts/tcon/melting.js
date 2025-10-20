// priority: 1
// requires: tconstruct
// requires: glintstyne

import { ore, melting, MOLTEN, TEMP } from './common.js';

ServerEvents.recipes(recipes => {
  melting(recipes, { item: 'glintstyne:mochite' },
    { amount: 100, fluid: 'flintstyne:molten_mochite' }, TEMP.MOCHITE, 70
  );
  melting(recipes, { item: 'glintstyne:mochite_block' },
    { amount: 900, fluid: 'flintstyne:molten_mochite' }, TEMP.MOCHITE, 220
  );
  
  ore(recipes, { item: 'glintstyne:raw_mochite' }, 'gem', [
      { amount: 100, fluid: 'flintstyne:molten_mochite' },
      [ { amount: 25, rate: 'gem', fluid: MOLTEN.DIAMOND } ]
    ], TEMP.MOCHITE, 70
  );
  ore(recipes, { item: 'glintstyne:raw_mochite_block' }, 'gem', [
      { amount: 900, fluid: 'flintstyne:molten_mochite' },
      [ { amount: 450, rate: 'gem', fluid: MOLTEN.DIAMOND } ]
    ], TEMP.MOCHITE, 180
  );
  ore(recipes, { item: 'glintstyne:mochite_ore' }, 'gem', [
      { amount: 200, fluid: 'flintstyne:molten_mochite' },
      [ { amount: 50, rate: 'gem', fluid: MOLTEN.DIAMOND } ]
    ], TEMP.MOCHITE, 110
  );
  ore(recipes, { item: 'glintstyne:raw_mochite_block' }, 'gem', [
      { amount: 200, fluid: 'flintstyne:molten_mochite' },
      [ { amount: 50, rate: 'gem', fluid: MOLTEN.DIAMOND } ]
    ], TEMP.MOCHITE, 110
  );
  ore(recipes, { item: 'glintstyne:deepslate_mochite_ore' }, 'gem', [
      { amount: 200, fluid: 'flintstyne:molten_mochite' },
      [ { amount: 50, rate: 'gem', fluid: MOLTEN.DIAMOND } ]
    ], TEMP.MOCHITE, 110
  );
});