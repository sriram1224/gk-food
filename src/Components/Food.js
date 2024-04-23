// FoodRecipes.js
import React from 'react';
import { Link } from 'react-router-dom';
import recipesData from '../reciepe.json';

const FoodRecipes = () => {
  return (
    <div>
      {recipesData.map((recipe, index) => (
        <div key={index}>
          <Link to={`/food/${index}`}>
            <h2>{recipe.name}</h2>
            <img src={recipe.imageURL} alt={recipe.name} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default FoodRecipes;
