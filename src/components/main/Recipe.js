import React, { useEffect, useState, useCallback, setState } from 'react';
import axios from 'axios';
import { Button } from '@material-ui/core';
import MainColumn1 from './MainColumn1';

export default function Recipe() {
    const recipeUrl = "https://www.themealdb.com/api/json/v1/1/random.php";
    
    const [recipe, setRecipe] = useState([]);
    const [state, setState] = useState('start')

    const changeState = () => {
        setState(state === 'start' ? 'description' : 'start');
        console.log(state)
      }

    const getRecipeWithShortDescription = useCallback(() => {
            axios.get(recipeUrl)
            .then(response => { 
                if(response.data.meals[0].strInstructions.length > 500){
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
        const maxNumber = 3;
        let ingredients = Object.keys(recipe)
            .filter(item => item.toString().startsWith("strIngredient"))
            .filter(key => recipe[key] !== "")
            .map(key => recipe[key]);
        return ingredients.slice(0, maxNumber);
    }

    if(state === 'start'){
        return (
        <div width="100%" alignitems="center">
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
        <Button aria-label="outlined primary button group" onClick={() => changeState()}>See recipe</Button>
    </div>
        )
    } else {
        return (
        <div width="100%" alignitems="center">
            <h4>{recipe.strMeal} step by step description:</h4> 
            <p width="100%">{recipe.strInstructions}</p>
            <Button aria-label="outlined primary button group" onClick={() => changeState()}>Back</Button>
        </div>)
    }
}
