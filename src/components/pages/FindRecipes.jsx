import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FindRecipes = () => {
  const { REACT_APP_EDAMAM_APP_ID, REACT_APP_EDAMAM_APP_KEY } = process.env;
  const mainIngredients = ['chicken', 'beef', 'lamb', 'pork', 'vegetarian', 'vegan'];
  const dietTypes = ['balanced', 'high-fiber', 'high-protein', 'low-carb', 'low-fat', 'low-sodium'];
  const healthTypes = [
    'immuno-supportive',
    'Mediterranean',
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
    // need to test this one, im thinking spelling is wrong
    'pescatarian',
    'peanut-free',
    'paleo',
    'no-oil-added',
    'mustard-free',
    'mollusk-free',
    'lupine-free',
    'low-sugar',
    'low-potassium',
    'kosher',
    'kidney-friendly',
    'keto-friendly',
    'gluten-free',
    'fodmap-free',
    'fish-free',
    'egg-free',
    'DASH',
    'dairy-free',
    'crustacean-free',
    'celery-free'
  ];
  const cuisineTypes = [
    'mediterranean',
    'asian',
    'caribbean',
    'british',
    'american',
    'central europe',
    'chinese',
    'eastern europe',
    'french',
    'greek',
    'indian',
    'italian',
    'japanese',
    'korean',
    'kosher',
    'mexican',
    'middle eastern',
    'nordic',
    'south american',
    'south east asian',
    'world'
  ];
  const mealTypes = ['dinner', 'breakfast', 'brunch', 'lunch', 'snack', 'teatime'];
  const dishTypes = [
    'main course',
    'alcohol cocktail',
    'sweets',
    'starter',
    'special occasions',
    'soup',
    'side dish',
    'seafood',
    'sandwiches',
    'salad',
    'preserve',
    'preps',
    'pizza',
    'pies and tarts',
    'pastry',
    'pasta',
    'pancake',
    'ice cream and custard',
    'egg',
    'drinks',
    'desserts',
    'condiments and sauces',
    'cereals',
    'bread',
    'biscuits and cookies'
  ];

  const initialFormData = {
    mainIngredient: 'chicken',
    diet: 'balanced',
    health: 'immuno-supportive',
    cuisine: 'mediterranean',
    meal: 'dinner',
    dish: 'main-course'
  };
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
            q: formData.mainIngredient,
            diet: formData.diet,
            health: formData.health,
            cuisineType: formData.cuisine,
            mealType: formData.meal,
            DishType: formData.dish,
            random: 'true'
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
    <div className="container mx-auto m-4 rounded-lg bg-base-300 artboard artboard-horizontal phone-6">
      <div className="form-control p-4 gap-4">
        <div className="grid grid-cols-3 gap-4">
          <select
            className="select select-secondary"
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
            className="select select-secondary"
            name="diet"
            value={formData.diet}
            onChange={handleFormData}
          >
            <option disabled selected>
              Diet
            </option>
            {dietTypes.map((dietType) => {
              return <option key={dietType}>{dietType}</option>;
            })}
          </select>
          <select
            className="select select-secondary"
            name="health"
            value={formData.health}
            onChange={handleFormData}
          >
            <option disabled selected>
              Health
            </option>
            {healthTypes.map((healthType) => {
              return <option key={healthType}>{healthType}</option>;
            })}
          </select>
          <select
            className="select select-secondary"
            name="cuisine"
            value={formData.cuisine}
            onChange={handleFormData}
          >
            <option disabled selected>
              Cusisine
            </option>
            {cuisineTypes.map((cuisineType) => {
              return <option key={cuisineType}>{cuisineType}</option>;
            })}
          </select>
          <select
            className="select select-secondary"
            name="meal"
            value={formData.meal}
            onChange={handleFormData}
          >
            <option disabled selected>
              Meal
            </option>
            {mealTypes.map((mealType) => {
              return <option key={mealType}>{mealType}</option>;
            })}
          </select>
          <select
            className="select select-secondary"
            name="dish"
            value={formData.dish}
            onChange={handleFormData}
          >
            <option disabled selected>
              Dish
            </option>
            {dishTypes.map((dishType) => {
              return <option key={dishType}>{dishType}</option>;
            })}
          </select>
        </div>
        <button className="btn w-full" type="submit" onClick={handleSubmit}>
          Find Recipes
        </button>
      </div>
    </div>
  );
};

export default FindRecipes;
