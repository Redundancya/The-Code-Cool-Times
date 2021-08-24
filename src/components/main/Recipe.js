import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Recipe() {

    const recipeUrl = "https://www.themealdb.com/api/json/v1/1/random.php";
    
    const [recipe, setRecipe] = useState([]);

    useEffect(()=>{
        axios.get(recipeUrl)
            .then(response => {
                setRecipe(response.data.meals[0]);
            })
        }, [])


    return (
        <div>
            <h3>{recipe.strMeal}</h3>
            <p>
                <img src={recipe.strMealThumb} alt={recipe.strMeal} width="100%"></img>
            </p>
        </div>
        );
}
