import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import RecipeButton from "./RecipeButton";


export default function Recipe() {
  const recipeUrl = "https://www.themealdb.com/api/json/v1/1/random.php";

  const [recipe, setRecipe] = useState([]);
  const [state, setState] = useState("front");
  const [loading, setLoading] = useState(true);

  const changeState = () => {
    setState(state === "front" ? "back" : "front");
  };

  const getRecipeWithShortDescription = useCallback(() => {
    axios.get(recipeUrl).then((response) => {
      if (response.data.meals[0].strInstructions.length > 600) {
        getRecipeWithShortDescription();
      } else {
        setLoading(false);
        setRecipe(response.data.meals[0]);
      }
    });
  }, []);

  useEffect(() => {
    getRecipeWithShortDescription();
  }, [getRecipeWithShortDescription]);

  const capitalize = (str) => {
    if(str !== null){
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
  };

  const getMaxNumOfIngredients = () => {
    const maxNumber = 10;
    let ingredients = Object.keys(recipe)
      .filter((item) => item.toString().startsWith("strIngredient"))
      .filter((key) => recipe[key] !== "")
      .map((key) => capitalize(recipe[key]));

    let uniqueIngredients = [...new Set(ingredients)]
    return uniqueIngredients.slice(0, maxNumber);
  };

  const recipeFront = (
    <div>
      <h4>Today's meal:</h4>
      <h3>{recipe.strMeal}</h3>
      <img src={recipe.strMealThumb} alt={recipe.strMeal}></img>
      <RecipeButton 
        text = {"Go to recipe"}
        callback={() => changeState()}
      ></RecipeButton>
      {getMaxNumOfIngredients().map((ingredient) => (
        <p key={ingredient}>{ingredient}</p>
      ))}
    </div>
  );

  const recipeBack = (
    <div>
      <h4>Step by step</h4>
      <h3>{recipe.strMeal}</h3>
      <img src={recipe.strMealThumb} alt={recipe.strMeal}></img>
      <RecipeButton 
        text = {"See ingredients"}
        callback={() => changeState()}
      ></RecipeButton>
      <p id="recipe-description">{recipe.strInstructions}</p>
    </div>
  );

  return loading === true ? "Loading..." : (state === "front" ? recipeFront : recipeBack);
}
