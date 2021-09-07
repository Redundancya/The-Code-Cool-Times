import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import RecipeButton from "./RecipeButton";

export default function Recipe() {
  const recipeUrl = "https://www.themealdb.com/api/json/v1/1/random.php";

  const [recipe, setRecipe] = useState([]);
  const [state, setState] = useState("front");
  const [loading, setLoading] = useState(true);
  const [uniqueIngredients, setUniqueIngredients] = useState([]);

  const changeState = () => {
    setState(state === "front" ? "back" : "front");
  };

  const capitalize = (str) => {
    if (str !== null) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
  };

  const getMaxNumOfIngredients = (meal) => {
    const maxNumber = 10;
    let ingredients = Object.keys(meal)
      .filter((item) => item.toString().startsWith("strIngredient"))
      .filter((key) => meal[key] !== "")
      .map((key) => capitalize(meal[key]));

    let uniqueIngredients = [...new Set(ingredients)];
    setUniqueIngredients(uniqueIngredients.slice(0, maxNumber));
  };

  const getRecipeWithShortDescription = useCallback(() => {
    axios.get(recipeUrl).then((response) => {
      if (response.data.meals[0].strInstructions.length > 600) {
        getRecipeWithShortDescription();
      } else {
        setRecipe(response.data.meals[0]);
        getMaxNumOfIngredients(response.data.meals[0]);
        setLoading(false);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getRecipeWithShortDescription();
  }, [getRecipeWithShortDescription]);

  const recipeFront = (
    <div>
      <h4>Today's meal:</h4>
      <h3>{recipe.strMeal}</h3>
      <img src={recipe.strMealThumb} alt={recipe.strMeal}></img>
      <RecipeButton
        text={"See recipe"}
        callback={() => changeState()}
      ></RecipeButton>
      {uniqueIngredients.map((ingredient) => (
        <p key={ingredient}>{ingredient}</p>
      ))}
    </div>
  );

  const recipeBack = (
    <div className="FlexColumn">
      <h4>Step by step</h4>
      <h3>{recipe.strMeal}</h3>
      <img src={recipe.strMealThumb} alt={recipe.strMeal}></img>
      <RecipeButton
        text={"See ingredients"}
        callback={() => changeState()}
      ></RecipeButton>
      <p id="recipe-description">{recipe.strInstructions}</p>
    </div>
  );

  return loading === true
    ? "Loading..."
    : state === "front"
    ? recipeFront
    : recipeBack;
}
