import React from 'react';
import recipesData from '../recipe.json';
import './Food.css'; // Import your CSS file for styling

const FoodRecipes = () => {
  return (
    <div className="recipe-container">
      {recipesData.map((recipe, index) => (
        <div className="recipe-card" key={index}>
          <img src={recipe.imageURL} alt={recipe.name} />
          <div className="recipe-details">
            <h2>{recipe.name}</h2>
            <h3>Ingredients:</h3>
            <ul>
              {recipe.ingredients.map((ingredient, idx) => (
                <li key={idx}>
                  {ingredient.quantity} {ingredient.name}
                </li>
              ))}
            </ul>
            <h3>Steps:</h3>
            <ol>
              {recipe.steps.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ol>
            <a href={recipe.originalURL} target="_blank" rel="noopener noreferrer">
              Original Recipe
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodRecipes;
