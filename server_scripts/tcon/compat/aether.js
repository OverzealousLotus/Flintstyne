// priority: 1
// requires: tconstruct
// requires: aether

import { damagable, MOLTEN, TEMP } from '../common.js';


ServerEvents.recipes(recipes => {
  damagable(recipes, { item: 'aether:netherite_gloves' }, [
      { amount: 90, tag: 'forge:molten_netherite' },
      { amount: 400, fluid: MOLTEN.DIAMOND }
    ], 1250, 74
  );
  damagable(recipes, { item: 'aether:diamond_gloves' },
    { amount: 400, fluid: MOLTEN.DIAMOND, unit_size: 25}, TEMP.DIAMOND, 158
  );
  damagable(recipes, { item: 'aether:golden_gloves' },
    { amount: 360, tag: MOLTEN.GOLD }, TEMP.GOLD, 114
  );
  damagable(recipes, { item: 'aether:iron_gloves'},
    { amount: 360, tag: MOLTEN.IRON }, TEMP.IRON, 120
  );
  damagable(recipes, { item: 'aether:chainmail_gloves' }, [
      { amount: 240, tag: MOLTEN.IRON },
      { amount: 120, tag: MOLTEN.STEEL }
    ], 800, 98
  );
});