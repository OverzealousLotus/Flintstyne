// priority: 0
// requires: tconstruct
// requires: aether

/**
 * Validates if results will not cause issues, and parses if so.
 * If unable to parse, will cause early return of calling function.
 * @param {JSON[]} results Array results to be checked.
 */
function validateResults(results) {
  if (!Array.isArray(results)) results = Array.of(results);
  if (results.length === 0) results = undefined;
  if (results[1] === undefined) results[1] = [];
  if (!Array.isArray(results[1])) results[1] = Array.of(results[1]); 

  return results;
}

/**
 * @param {Internal.RecipesEventJS} recipes Recipe handler.
 * @param {JSON} ingredient Target item(s).
 * @param {JSON[]} results Array of results. Second parameter sets Byproducts.
 * @param {Number} temp Required temperature.
 * @param {Number} time Time taken to melt item. */
function damagable(recipes, ingredient, results, temp, time) {
  results = validateResults(results);
  if (results === undefined) return;
  recipes.custom({
    type: "tconstruct:damagable_melting",
    ingredient: ingredient,
    result: results[0],
    byproducts: results[1],
    temperature: temp,
    time: time
  });
}

/**
 * @param {Internal.RecipesEventJS} recipes 
 * @param {JSON} ingredient Target item(s).
 * @param {String} rate Rate type for result scaling.
 * @param {JSON[]} results Array of results. Second parameter sets Byproducts.
 * @param {Number} temp Required temperature.
 * @param {Number} time Time taken to melt item.
 */
function ore(recipes, ingredient, rate, results, temp, time) {
  results = validateResults(results);
  if (results === undefined) return;
  recipes.custom({
    type: "tconstruct:ore_melting",
    ingredient: ingredient,
    rate: rate,
    result: results[0],
    byproducts: results[1],
    temperature: temp,
    time: time
  });
}