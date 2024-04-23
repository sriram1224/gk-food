import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Food.css'; // Import your CSS file for styling

const TastyRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: 'GET',
          url: 'https://tasty.p.rapidapi.com/recipes/list',
          params: {
            from: '0',
            size: '20',
            tags: 'under_30_minutes'
          },
          headers: {
            'X-RapidAPI-Key': '83b40fa41emsh0e56bc76144e66ep12e8aajsn4a7730558238',
            'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
          }
        };
        const response = await axios.request(options);
        setRecipes(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="recipe-container">
      {loading ? (
        <div className="loader"></div> // Display loading spinner
      ) : (
        recipes.map((recipe, index) => (
          <div className="recipe-card" key={index}>
            <div className="recipe-image-container">
              <img src={recipe.thumbnail_url} alt={recipe.name} className="recipe-image" />
            </div>
            <div className="recipe-details">
              <h2 className="text-xl font-bold">{recipe.name}</h2>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default TastyRecipes;
