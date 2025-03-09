// priority: 0
// requires: simplyswords
// requires: tconstruct
const WEAPONS = [
  'chakram',
  'claymore',
  'cutlass',
  'glaive',
  'greataxe',
  'greathammer',
  'halberd',
  'katana',
  'longsword',
  'rapier',
  'sai',
  'scythe',
  'spear',
  'twinblade',
  'warglaive'
];

const METALS = [
  'iron',
  'gold',
  'netherite'
];

const GEMS = [
  'diamond'
];

ServerEvents.recipes(recipes => {
  function damagable_melting(material, type, byproduct, isGem) {
    if(isGem) {
      recipes.custom({
        type: 'tconstruct:damagable_melting',
        ingredient: {
          item: 'simplyswords:' + material + '_' + type
        },
        result: {
          tag: 'tconstruct:molten_' + material,
          amount: 200,
          unit_size: 25
        },
        byproducts: [
          {
            tag: 'forge:molten_' + byproduct,
            amount: 80
          }
        ],
        temperature: 800,
        time: 120
      });
    } else {
      recipes.custom({
        type: 'tconstruct:damagable_melting',
        ingredient: {
          item: 'simplyswords:' + material + '_' + type
        },
        result: {
          tag: 'forge:molten_' + material,
          amount: 220,
          unit_size: 10
        },
        byproducts: [
          {
            tag: 'forge:molten_' + byproduct,
            amount: 80
          }
        ],
        temperature: 800,
        time: 120
      });
    }
    
  }
  
  WEAPONS.forEach(type => {
    METALS.forEach(material => {
      damagable_melting(material, type, 'steel', false);
    });
  });
  WEAPONS.forEach(type => {
    GEMS.forEach(gem => {
      damagable_melting(gem, type, 'steel', true);
    })
  })
})