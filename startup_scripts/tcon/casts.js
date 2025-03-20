// priority: 0
// requires: tconstruct
function newFlintCast(items, id, name, texture, tag) {
  items.create('flintstyne:' + id + '_cast').displayName(name + ' Cast')
  .texture('flintstyne:item/' + texture).tag('tconstruct:casts/' + tag);
}
StartupEvents.registry('item', items => {
  newFlintCast(items, 'ingot_mochite', 'Ingot Mochite', 'mochite_cast/ingot', 'multi_use/ingot');
  newFlintCast(items, 'nugget_mochite', 'Nugget Mochite', 'mochite_cast/nugget', 'multi_use/nugget');
  newFlintCast(items, 'gem_mochite', 'Gem Mochite', 'mochite_cast/gem', 'multi_use/gem');
  newFlintCast(items, 'adze_head_mochite', 'Adze Head Mochite', 'mochite_cast/adze_head', 'multi_use/adze_head');
});