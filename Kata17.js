// Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

// Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

// Examples:

// // must return 2
// cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200});
// // must return 0
// cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});

function cakes(recipe, available) {
  // Creamos una lista de cada parametro por sus keys respectivas
  let recipeKeys = Object.keys(recipe);
  let availableKeys = Object.keys(available);
  //Creamos una variable para almacenar los ingredientes disponibles respecto a la receta
  let availability = recipeKeys.filter((ingredient) =>
    availableKeys.includes(ingredient)
  );
  //Validamos si los ingredientes disponibles y los solicitados se encuentran
  if (availability.length != recipeKeys.length) {
    return 0;
  }
  // Creamos un array en el cual almacenaremos la division de lo disponible / lo que pide la recete
  let leftIngredients = [];
  // Realizamos la división
  Object.entries(recipe).forEach(([key, value]) => {
    leftIngredients.push(Math.floor(available[key] / value));
  });
  // Retornamos el menor del array truncandolo al entero anterior
  return Math.min(...leftIngredients);
}
console.log(
  cakes(
    { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
    { sugar: 500, flour: 2000, milk: 2000 }
  )
);
