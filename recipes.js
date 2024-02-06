db.createCollection("recipes");

db.recipes.insert({
  name: "Krabby Patty",
  price: 5.99,
  ingredients: [
    "Kelp patty",
    "Secret sauce",
    "Lettuce",
    "Tomato",
    "Cheese",
    "Pickles",
    "Bun",
  ],
});
