import React, { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import { Button } from '@material-ui/core';

export default function Recipe() {

    const recipeUrl = "https://www.themealdb.com/api/json/v1/1/random.php";
    
    const [recipe, setRecipe] = useState([]);

    const getRecipeWithShortDescription = useCallback(() => {
            axios.get(recipeUrl)
            .then(response => { 
                if(response.data.meals[0].strInstructions.length > 600){
                    getRecipeWithShortDescription();
                } else {
                    setRecipe(response.data.meals[0]);
                }
            })
        },[],
    )

    useEffect(()=>{
        getRecipeWithShortDescription();
        }, [getRecipeWithShortDescription])

    const getMaxNumOfIngredients = () => {
        const maxNumber = 4;
        let ingredients = Object.keys(recipe)
            .filter(item => item.toString().startsWith("strIngredient"))
            .filter(key => recipe[key] !== "")
            .map(key => recipe[key]);
        return ingredients.slice(0, maxNumber);
    }

    return (
        <div width="150px" alignitems="center">
            <h4>Today's meal:</h4> 
            <h3>{recipe.strMeal}</h3>
            <p>
                <img src={recipe.strMealThumb} alt={recipe.strMeal} 
                width="150px" height="auto"></img>
            </p>
            <ul>
            {getMaxNumOfIngredients().map(ingredient =>
                <li>{ingredient}</li>)}
                <li>...</li>
            </ul>
            <Button aria-label="outlined primary button group">See recipe</Button>
        </div>
        );  
}
