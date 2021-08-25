import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { Button } from "@material-ui/core";

export default function Recipe() {
  const recipeUrl = "https://www.themealdb.com/api/json/v1/1/random.php";

  const [recipe, setRecipe] = useState([]);
  const [state, setState] = useState("front");

  const changeState = () => {
    setState(state === "front" ? "back" : "front");
  };

  const getRecipeWithShortDescription = useCallback(() => {
    axios.get(recipeUrl).then((response) => {
      if (response.data.meals[0].strInstructions.length > 580) {
        getRecipeWithShortDescription();
      } else {
        setRecipe(response.data.meals[0]);
      }
    });
  }, []);

  useEffect(() => {
    getRecipeWithShortDescription();
  }, [getRecipeWithShortDescription]);

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const getMaxNumOfIngredients = () => {
    const maxNumber = 10;
    let ingredients = Object.keys(recipe)
      .filter((item) => item.toString().startsWith("strIngredient"))
      .filter((key) => recipe[key] !== "")
      .map((key) => capitalize(recipe[key]));
    return ingredients.slice(0, maxNumber);
  };

  const recipeFront = (
    <div>
      <h4>Today's meal:</h4>
      <h3>{recipe.strMeal}</h3>
      <img src={recipe.strMealThumb} alt={recipe.strMeal}></img>
      {getMaxNumOfIngredients().map((ingredient) => (
        <p key={ingredient}>{ingredient}</p>
      ))}
      <Button
        aria-label="outlined primary button group"
        onClick={() => changeState()}
      >
        See recipe
      </Button>
    </div>
  );

  const recipeBack = (
    <div>
      <h4>Step by step</h4>
      <h3>{recipe.strMeal}</h3>
      <img src={recipe.strMealThumb} alt={recipe.strMeal}></img>
      <p className="description">{recipe.strInstructions}</p>
      <Button
        aria-label="outlined primary button group"
        onClick={() => changeState()}
      >
        Back
      </Button>
    </div>
  );

  return state === "front" ? recipeFront : recipeBack;
}
