import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FindRecipes = () => {
  const { REACT_APP_EDAMAM_APP_ID, REACT_APP_EDAMAM_APP_KEY } = process.env;

  const initialFormData = {
    mainIngredient: '',
    diet: '',
    health: '',
    cuisineType: '',
    mealType: '',
    dishType: ''
  };
  const mainIngredients = ['chicken', 'beef', 'lamb', 'pork', 'vegetarian', 'vegan'];
  const dietTypes = ['balanced', 'high-fiber', 'high-protein', 'low-carb', 'low-fat', 'low-sodium'];
  const healthTypes = [
    'alcohol-free',
    'alcohol-cocktail',
    'wheat-free',
    'vegetarian',
    'vegan',
    'tree-nut-free',
    'sulfite-free',
    'sugar-conscious',
    'soy-free',
    'shellfish-free',
    'sesame-free',
    'red-meat-free',
    'pork-free',
    'pecatarian',
    'peanut-free',
    'paleo',
    'No-oil-added',
    'mustard-free',
    'mollusk-free',
    'Mediterranean',
    'lupine-free',
    'low-sugar',
    'low-potassium',
    'kosher',
    'kidney-friendly',
    'keto-friendly',
    'immuno-supportive',
    'gluten-free',
    'fodmap-free',
    'fish-free',
    'egg-free',
    'DASH',
    'dairy-free',
    'crustacean-free',
    'celery-free'
  ];
  const cuisineTypes = ['mexican', 'indian', 'bbq', 'american', 'aussie'];
  const mealTypes = ['breakfast', 'brunch', 'lunch/dinner', 'snack', 'teatime'];
  const dishTypes = [];

  const [formData, setFormData] = useState(initialFormData);

  const handleFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.edamam.com/api/recipes/v2?type=public&app_id=${REACT_APP_EDAMAM_APP_ID}&app_key=${REACT_APP_EDAMAM_APP_KEY}`,
        {
          params: {
            q: 'chicken',
            diet: '',
            health: 'keto-friendly',
            cuisineType: '',
            mealType: 'dinner',
            DishType: ''
          }
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.error(err);
      });
    console.log(
      '🚀 ~ file: FindRecipes.jsx ~ line 27 ~ handleSubmit ~ process.env.EDAMAM_APP_ID',
      process.env.EDAMAM_APP_ID
    );
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <div className="container mx-auto p-4 bg-green-500 artboard artboard-horizontal phone-6">
      <div className="form-control">
        <div className="input-group">
          <select
            className="select"
            name="mainIngredient"
            value={formData.mainIngredient}
            onChange={handleFormData}
          >
            <option disabled selected>
              Main Ingredient
            </option>
            {mainIngredients.map((mainIngredient) => {
              return <option key={mainIngredient}>{mainIngredient}</option>;
            })}
          </select>
          <select
            className="select"
            name="mealType"
            value={formData.mealType}
            onChange={handleFormData}
          >
            <option disabled selected>
              Meal Type
            </option>
            {mealTypes.map((mealType) => {
              return <option key={mealType}>{mealType}</option>;
            })}
          </select>
          <select
            className="select"
            name="cuisineType"
            value={formData.cuisineType}
            onChange={handleFormData}
          >
            <option disabled selected>
              Cusisine
            </option>
            {cuisineTypes.map((cuisineType) => {
              return <option key={cuisineType}>{cuisineType}</option>;
            })}
          </select>
          <button className="btn" type="submit" onClick={handleSubmit}>
            Find Recipes
          </button>
        </div>
      </div>
    </div>
  );
};

export default FindRecipes;
