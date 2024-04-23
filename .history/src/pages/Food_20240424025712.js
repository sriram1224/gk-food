import React from 'react';
import recipesData from '../reciepe.json';
import './Food.css'; // Import your CSS file for styling

const FoodRecipes = () => {
  return (
    <div className="recipe-container">
      {recipesData.map((recipe, index) => (
        <div className="recipe-card" key={index}>
          <img src={recipe.imageURL} alt={recipe.name} className="recipe-image" />
          <div className="recipe-details">
            <h2 className="text-xl font-bold">{recipe.name}</h2>
            <p className="text-gray-600">{recipe.ingredients[0].type}</p> {/* Displaying only the first ingredient's type */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodRecipes;
