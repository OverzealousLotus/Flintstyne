// priority: 1
// requires: tconstruct
// requires: swem
import { melting, MOLTEN, TEMP } from '../common.js';

ServerEvents.recipes(recipes => {
  melting(recipes, { item: 'swem:rivet_copper' },
    { amount: 10, tag: MOLTEN.COPPER }, TEMP.COPPER, 17
  );
  melting(recipes, { item: 'swem:helmet_copper' },
    { amount: 50, tag: MOLTEN.COPPER }, TEMP.COPPER, 112
  );
  melting(recipes, { item: 'swem:chestplate_copper' },
    { amount: 70, tag: MOLTEN.COPPER }, TEMP.COPPER, 132
  );
  melting(recipes, { item: 'swem:leggings_copper' },
    { amount: 60, tag: MOLTEN.COPPER }, TEMP.COPPER, 141
  );
  melting(recipes, { item: 'swem:shield_copper' },
    { amount: 50, tag: MOLTEN.COPPER }, TEMP.COPPER, 138
  );


  melting(recipes, { item: 'swem:rivet_iron' },
    { amount: 10, tag: MOLTEN.IRON }, TEMP.IRON, 20
  );
  melting(recipes, { item: 'swem:helmet_iron' },[
    { amount: 290, tag: MOLTEN.IRON },
      { amount: 50, tag: MOLTEN.COPPER }
    ], TEMP.IRON, 20
  );
  melting(recipes, { item: 'swem:chestplate_iron' },[
      { amount: 310, tag: MOLTEN.IRON },
      { amount: 70, tag: MOLTEN.COPPER }
    ], TEMP.IRON, 20
  );
  melting(recipes, { item: 'swem:leggings_iron' },[
      { amount: 220, tag: MOLTEN.IRON },
      { amount: 60, tag: MOLTEN.COPPER }
    ], TEMP.IRON, 20
  );
  melting(recipes, { item: 'swem:boots_riding_iron' },
    { amount: 200, tag: MOLTEN.IRON }, TEMP.IRON, 20
  );


  melting(recipes, { item: 'swem:rivet_gold' },
    { amount: 10, tag: MOLTEN.GOLD }, TEMP.GOLD, 19
  );
  melting(recipes, { item: 'swem:helmet_gold' }, [
      { amount: 50, tag: MOLTEN.GOLD },
      [
        { amount: 290, tag: MOLTEN.IRON },
        { amount: 50, tag: MOLTEN.COPPER },
      ]
    ], TEMP.GOLD, 19
  );
  melting(recipes, { item: 'swem:chestplate_gold' }, [
      { amount: 70, tag: MOLTEN.GOLD },
      [
        { amount: 310, tag: MOLTEN.IRON },
        { amount: 70, tag: MOLTEN.COPPER },
      ]
    ], TEMP.GOLD, 19
  );
  melting(recipes, { item: 'swem:leggings_gold' }, [
      { amount: 60, tag: MOLTEN.GOLD },
      [
        { amount: 220, tag: MOLTEN.IRON },
        { amount: 60, tag: MOLTEN.COPPER },
      ]
    ], TEMP.GOLD, 19
  );
  melting(recipes, { item: 'swem:boots_riding_gold' }, [
      { amount: 40, tag: MOLTEN.GOLD },
      { amount: 200, tag: MOLTEN.IRON }
    ], TEMP.GOLD, 19
  );


  melting(recipes, { item: 'swem:rivet_diamond' },
    { amount: 10, fluid: MOLTEN.DIAMOND }, TEMP.DIAMOND, 59
  );
  melting(recipes, { item: 'swem:helmet_diamond' }, [
      { amount: 320, fluid: MOLTEN.DIAMOND },
      [
        { amount: 50, tag: MOLTEN.COPPER },
        { amount: 290, tag: MOLTEN.IRON },
        { amount: 50, tag: MOLTEN.GOLD }
      ]
    ], TEMP.DIAMOND, 59
  );
  melting(recipes, { item: 'swem:chestplate_diamond' }, [
      { amount: 340, fluid: MOLTEN.DIAMOND },
      [
        { amount: 70, tag: MOLTEN.COPPER },
        { amount: 310, tag: MOLTEN.IRON },
        { amount: 70, tag: MOLTEN.GOLD }
      ]
    ], TEMP.DIAMOND, 59
  );
  melting(recipes, { item: 'swem:leggings_diamond' }, [
      { amount: 240, fluid: MOLTEN.DIAMOND },
      [
        { amount: 60, tag: MOLTEN.COPPER },
        { amount: 220, tag: MOLTEN.IRON },
        { amount: 60, tag: MOLTEN.GOLD }
      ]
    ], TEMP.DIAMOND, 59
  );
  melting(recipes, { item: 'swem:boots_riding_diamond' }, [
      { amount: 220, fluid: MOLTEN.DIAMOND },
      [
        { amount: 200, tag: MOLTEN.IRON },
        { amount: 40, tag: MOLTEN.GOLD }
      ]
    ], TEMP.DIAMOND, 59
  );


  melting(recipes, { item: 'swem:rivet_netherite'},
    { amount: 10, tag: 'forge:molten_netherite'}, TEMP.NETHERITE, 25
  );
  melting(recipes, { item: 'swem:helmet_netherite' }, [
      { amount: 50, tag: MOLTEN.NETHERITE },
      [
        { amount: 50, tag: MOLTEN.COPPER },
        { amount: 290, tag: MOLTEN.IRON },
        { amount: 50, tag: MOLTEN.GOLD },
        { amount: 320, fluid: MOLTEN.DIAMOND }
      ]
    ], TEMP.NETHERITE, 59
  );
  melting(recipes, { item: 'swem:chestplate_netherite' }, [
      { amount: 70, tag: MOLTEN.NETHERITE },
      [
        { amount: 70, tag: MOLTEN.COPPER },
        { amount: 310, tag: MOLTEN.IRON },
        { amount: 70, tag: MOLTEN.GOLD },
        { amount: 340, fluid: MOLTEN.DIAMOND }
      ]
    ], TEMP.NETHERITE, 59
  );
  melting(recipes, { item: 'swem:leggings_netherite' }, [
      { amount: 60, tag: MOLTEN.NETHERITE },
      [
        { amount: 60, tag: MOLTEN.COPPER },
        { amount: 220, tag: MOLTEN.IRON },
        { amount: 60, tag: MOLTEN.GOLD },
        { amount: 240, fluid: MOLTEN.DIAMOND }
      ]
    ], TEMP.NETHERITE, 59
  );
  melting(recipes, { item: 'swem:boots_riding_netherite' }, [
      { amount: 40, tag: MOLTEN.NETHERITE },
      [
        { amount: 200, tag: MOLTEN.IRON },
        { amount: 40, tag: MOLTEN.GOLD },
        { amount: 220, fluid: MOLTEN.DIAMOND }
      ]
    ], TEMP.NETHERITE, 59
  );


  melting(recipes, { item: 'swem:plate_copper'},
    { amount: 360, tag: 'forge:molten_copper'}, TEMP.COPPER, 50
  );
  melting(recipes, { item: 'swem:plate_iron'},
    { amount: 360, tag: 'forge:molten_iron'}, TEMP.IRON, 60
  );
  melting(recipes, { item: 'swem:plate_gold'},
    { amount: 360, tag: 'forge:molten_gold'}, TEMP.GOLD, 57
  );
  melting(recipes, { item: 'swem:plate_diamond'},
    { amount: 400, tag: 'tconstruct:molten_diamond'}, TEMP.DIAMOND, 80
  );
  melting(recipes, { item: 'swem:plate_netherite'},
    { amount: 360, tag: 'forge:molten_netherite'}, TEMP.NETHERITE, 74
  );
});