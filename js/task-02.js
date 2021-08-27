const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


// list.textContent = "Potatoes";
// list.append(lastItem);


ingredients.forEach((x) => {
 const list = document.querySelector("ul");
 const lastItem = document.createElement("li");
  lastItem.textContent = x;
  lastItem.classList.add("item")
  list.append(lastItem);

 }
);




