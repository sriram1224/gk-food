// FoodDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import recipesData from '../recipe.json';

const FoodDetail = () => {
  const { id } = useParams();
  const recipe = recipesData[id];

  if (!recipe) return <div>Recipe not found</div>;

  return (
    <div>
      <h2>{recipe.name}</h2>
      <img src={recipe.imageURL} alt={recipe.name} />
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
  );
};

export default FoodDetail;
