import { useState } from "react";
import Recipe from "./Recipe";

export default function RecipeList() {
  const [recipes, setRecipes] = useState([
    {
      id: "greek-salad",
      name: "Greek Salad",
      ingredients: ["tomatoes", "cucumber", "onion", "olives", "feta"],
    },
    {
      id: "hawaiian-pizza",
      name: "Hawaiian Pizza",
      ingredients: ["pizza crust", "pizza sauce", "mozzarella", "ham", "pineapple"],
    },
    {
      id: "hummus",
      name: "Hummus",
      ingredients: ["chickpeas", "olive oil", "garlic cloves", "lemon", "tahini"],
    },
  ]);

  const deleteHandler = (id: string) => {
    setRecipes((recipes) => recipes.filter((recipe) => recipe.id !== id));
  };

  return (
    <>
      <h1 className="text-2xl font-bold">RecipeList</h1>
      <ul className="mt-10">
        {recipes.map((recipe) => (
          <Recipe key={recipe.id} {...recipe} deleteHandler={deleteHandler} />
        ))}
      </ul>
    </>
  );
}
