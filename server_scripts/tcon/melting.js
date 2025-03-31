// priority: 1
// requires: tconstruct
// requires: glintstyne
const DIAMOND_TEMP = 1450;
const NETHERITE_TEMP = 1250;
const MOCHITE_TEMP = 900;
const IRON_TEMP = 800;
const GOLD_TEMP = 700;
const COPPER_TEMP = 500;

const MOLTEN_COPPER = 'forge:molten_copper';
const MOLTEN_IRON = 'forge:molten_iron';
const MOLTEN_GOLD = 'forge:molten_gold';
const MOLTEN_DIAMOND = 'tconstruct:molten_diamond'
const MOLTEN_NETHERITE = 'forge:molten_netherite';

import { damagable, ore, melting } from './common.js';

ServerEvents.recipes(recipes => {
  melting(recipes, { item: 'glintstyne:mochite' },
    { amount: 100, fluid: 'flintstyne:molten_mochite' }, MOCHITE_TEMP, 70
  );
  melting(recipes, { item: 'glintstyne:mochite_block' },
    { amount: 900, fluid: 'flintstyne:molten_mochite' }, MOCHITE_TEMP, 220
  );

  melting(recipes, { item: 'swem:rivet_copper' },
    { amount: 10, tag: MOLTEN_COPPER }, COPPER_TEMP, 17
  );
  melting(recipes, { item: 'swem:helmet_copper' },
    { amount: 50, tag: MOLTEN_COPPER }, COPPER_TEMP, 112
  );
  melting(recipes, { item: 'swem:chestplate_copper' },
    { amount: 70, tag: MOLTEN_COPPER }, COPPER_TEMP, 132
  );
  melting(recipes, { item: 'swem:leggings_copper' },
    { amount: 60, tag: MOLTEN_COPPER }, COPPER_TEMP, 141
  );


  melting(recipes, { item: 'swem:rivet_iron' },
    { amount: 10, tag: MOLTEN_IRON }, IRON_TEMP, 20
  );
  melting(recipes, { item: 'swem:helmet_iron' },[
    { amount: 290, tag: MOLTEN_IRON },
      { amount: 50, tag: MOLTEN_COPPER }
    ], IRON_TEMP, 20
  );
  melting(recipes, { item: 'swem:chestplate_iron' },[
      { amount: 310, tag: MOLTEN_IRON },
      { amount: 70, tag: MOLTEN_COPPER }
    ], IRON_TEMP, 20
  );
  melting(recipes, { item: 'swem:leggings_iron' },[
      { amount: 220, tag: MOLTEN_IRON },
      { amount: 60, tag: MOLTEN_COPPER }
    ], IRON_TEMP, 20
  );
  melting(recipes, { item: 'swem:boots_riding_iron' },
    { amount: 200, tag: MOLTEN_IRON }, IRON_TEMP, 20
  );


  melting(recipes, { item: 'swem:rivet_gold' },
    { amount: 10, tag: MOLTEN_GOLD }, GOLD_TEMP, 19
  );
  melting(recipes, { item: 'swem:helmet_gold' }, [
      { amount: 50, tag: MOLTEN_GOLD },
      [
        { amount: 290, tag: MOLTEN_IRON },
        { amount: 50, tag: MOLTEN_COPPER },
      ]
    ], GOLD_TEMP, 19
  );
  melting(recipes, { item: 'swem:chestplate_gold' }, [
      { amount: 70, tag: MOLTEN_GOLD },
      [
        { amount: 310, tag: MOLTEN_IRON },
        { amount: 70, tag: MOLTEN_COPPER },
      ]
    ], GOLD_TEMP, 19
  );
  melting(recipes, { item: 'swem:leggings_gold' }, [
      { amount: 60, tag: MOLTEN_GOLD },
      [
        { amount: 220, tag: MOLTEN_IRON },
        { amount: 60, tag: MOLTEN_COPPER },
      ]
    ], GOLD_TEMP, 19
  );
  melting(recipes, { item: 'swem:boots_riding_gold' }, [
      { amount: 40, tag: MOLTEN_GOLD },
      { amount: 200, tag: MOLTEN_IRON }
    ], GOLD_TEMP, 19
  );

  melting(recipes, { item: 'swem:rivet_diamond' },
    { amount: 10, tag: MOLTEN_DIAMOND }, DIAMOND_TEMP, 59
  );
  melting(recipes, { item: 'swem:helmet_diamond' }, [
      { amount: 320, tag: MOLTEN_DIAMOND },
      [
        { amount: 50, tag: MOLTEN_COPPER },
        { amount: 290, tag: MOLTEN_IRON },
        { amount: 50, tag: MOLTEN_GOLD }
      ]
    ], DIAMOND_TEMP, 59
  );
  melting(recipes, { item: 'swem:chestplate_diamond' }, [
      { amount: 340, tag: MOLTEN_DIAMOND },
      [
        { amount: 70, tag: MOLTEN_COPPER },
        { amount: 310, tag: MOLTEN_IRON },
        { amount: 70, tag: MOLTEN_GOLD }
      ]
    ], DIAMOND_TEMP, 59
  );
  melting(recipes, { item: 'swem:leggings_diamond' }, [
      { amount: 240, tag: MOLTEN_DIAMOND },
      [
        { amount: 60, tag: MOLTEN_COPPER },
        { amount: 220, tag: MOLTEN_IRON },
        { amount: 60, tag: MOLTEN_GOLD }
      ]
    ], DIAMOND_TEMP, 59
  );
  melting(recipes, { item: 'swem:boots_riding_diamond' }, [
      { amount: 220, tag: MOLTEN_DIAMOND },
      [
        { amount: 200, tag: MOLTEN_IRON },
        { amount: 40, tag: MOLTEN_GOLD }
      ]
    ], DIAMOND_TEMP, 59
  );


  melting(recipes, { item: 'swem:rivet_netherite'},
    { amount: 10, tag: 'forge:molten_netherite'}, NETHERITE_TEMP, 25
  );
  melting(recipes, { item: 'swem:helmet_netherite' }, [
      { amount: 50, tag: MOLTEN_NETHERITE },
      [
        { amount: 50, tag: MOLTEN_COPPER },
        { amount: 290, tag: MOLTEN_IRON },
        { amount: 50, tag: MOLTEN_GOLD },
        { amount: 320, tag: MOLTEN_DIAMOND }
      ]
    ], NETHERITE_TEMP, 59
  );
  melting(recipes, { item: 'swem:chestplate_netherite' }, [
      { amount: 70, tag: MOLTEN_NETHERITE },
      [
        { amount: 70, tag: MOLTEN_COPPER },
        { amount: 310, tag: MOLTEN_IRON },
        { amount: 70, tag: MOLTEN_GOLD },
        { amount: 340, tag: MOLTEN_DIAMOND }
      ]
    ], NETHERITE_TEMP, 59
  );
  melting(recipes, { item: 'swem:leggings_netherite' }, [
      { amount: 60, tag: MOLTEN_NETHERITE },
      [
        { amount: 60, tag: MOLTEN_COPPER },
        { amount: 220, tag: MOLTEN_IRON },
        { amount: 60, tag: MOLTEN_GOLD },
        { amount: 240, tag: MOLTEN_DIAMOND }
      ]
    ], NETHERITE_TEMP, 59
  );
  melting(recipes, { item: 'swem:boots_riding_netherite' }, [
      { amount: 40, tag: MOLTEN_NETHERITE },
      [
        { amount: 200, tag: MOLTEN_IRON },
        { amount: 40, tag: MOLTEN_GOLD },
        { amount: 220, tag: MOLTEN_DIAMOND }
      ]
    ], NETHERITE_TEMP, 59
  );
  melting(recipes, { item: 'swem:plate_copper'},
    { amount: 360, tag: 'forge:molten_copper'}, COPPER_TEMP, 50
  );
  melting(recipes, { item: 'swem:plate_iron'},
    { amount: 360, tag: 'forge:molten_iron'}, IRON_TEMP, 60
  );
  melting(recipes, { item: 'swem:plate_gold'},
    { amount: 360, tag: 'forge:molten_gold'}, GOLD_TEMP, 57
  );
  melting(recipes, { item: 'swem:plate_diamond'},
    { amount: 400, tag: 'tconstruct:molten_diamond'}, DIAMOND_TEMP, 80
  );
  melting(recipes, { item: 'swem:plate_netherite'},
    { amount: 360, tag: 'forge:molten_netherite'}, NETHERITE_TEMP, 74
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