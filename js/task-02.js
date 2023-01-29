const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const makeIngredients = elements => {
  return ingredients.map(element => {
    const liItem = document.createElement(`li`);
    liItem.textContent = `ingredient`;
    liItem.classList.add(`item`);
    return liItem;
  });
};
const ul = document.querySelector(`ul#ingredients`);

const elements = makeIngredients(ingredients);
ul.append(...elements)