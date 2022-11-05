import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useGlobalState } from '../../utils/stateContext.jsx';
import Card from '../common/Card.jsx';

const FindRecipes = () => {
  const { REACT_APP_EDAMAM_APP_ID, REACT_APP_EDAMAM_APP_KEY } = process.env;
  const { store, dispatch } = useGlobalState();
  const { recipes } = store;
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
            random: 'true',
            from: '0',
            to: '50'
          }
        }
      )
      .then((response) => {
        console.log(response);
        dispatch({
          type: 'setRecipes',
          data: response.data.hits
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    console.log(formData);
    console.log(recipes);
  }, [formData, recipes]);

  return (
    <>
      {/* <div className="flex container items-center justify-center max-w-5xl mx-auto m-4 p-4 rounded-lg bg-base-300 phone-6 text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Find Recipes</h1>
        </div>
      </div> */}
      <div className="flex flex-col container justify-center max-w-6xl mx-auto m-4 rounded-lg bg-base-300 phone-6">
        <div className="flex items-center justify-center pt-4">
          <h1 className="text-5xl font-bold">Find Recipes</h1>
        </div>
        <div className="form-control p-4 gap-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 w-auto">
            <label className="input-group input-group-vertical">
              <span className="bg-secondary">Main Ingredient</span>
              <select
                className="select select-secondary"
                name="mainIngredient"
                value={formData.mainIngredient}
                onChange={handleFormData}
              >
                <option disabled>MAIN INGREDIENT</option>
                {mainIngredients.map((mainIngredient) => {
                  return <option key={mainIngredient}>{mainIngredient}</option>;
                })}
              </select>
            </label>
            <label className="input-group input-group-vertical">
              <span className="bg-secondary">Diet</span>
              <select
                className="select select-secondary"
                name="diet"
                value={formData.diet}
                onChange={handleFormData}
              >
                <option disabled>Diet</option>
                {dietTypes.map((dietType) => {
                  return <option key={dietType}>{dietType}</option>;
                })}
              </select>
            </label>
            <label className="input-group input-group-vertical">
              <span className="bg-secondary">Health</span>
              <select
                className="select select-secondary"
                name="health"
                value={formData.health}
                onChange={handleFormData}
              >
                <option disabled>Health</option>
                {healthTypes.map((healthType) => {
                  return <option key={healthType}>{healthType}</option>;
                })}
              </select>
            </label>
            <label className="input-group input-group-vertical">
              <span className="bg-secondary">Cusisine</span>
              <select
                className="select select-secondary"
                name="cuisine"
                value={formData.cuisine}
                onChange={handleFormData}
              >
                <option disabled>Cusisine</option>
                {cuisineTypes.map((cuisineType) => {
                  return <option key={cuisineType}>{cuisineType}</option>;
                })}
              </select>
            </label>
            <label className="input-group input-group-vertical">
              <span className="bg-secondary">Meal</span>
              <select
                className="select select-secondary"
                name="meal"
                value={formData.meal}
                onChange={handleFormData}
              >
                <option disabled>Meal</option>
                {mealTypes.map((mealType) => {
                  return <option key={mealType}>{mealType}</option>;
                })}
              </select>
            </label>
            <label className="input-group input-group-vertical">
              <span className="bg-secondary">Dish</span>
              <select
                className="select select-secondary"
                name="dish"
                value={formData.dish}
                onChange={handleFormData}
              >
                <option disabled>Dish</option>
                {dishTypes.map((dishType) => {
                  return <option key={dishType}>{dishType}</option>;
                })}
              </select>
            </label>
          </div>
          <button className="btn btn-md btn-success" type="submit" onClick={handleSubmit}>
            {recipes.length ? 'Add More Recipes' : 'Find Recipes'}
          </button>
          {recipes.length ? (
            <>
              <div className="divider"></div>
              <input
                type="text"
                placeholder="Start adding your ingredients"
                className="input input-bordered input-secondary w-full "
              />
              <div className="flex">
                <div className="badge badge-outline mr-2">butter</div>
                <div className="badge badge-primary badge-outline mr-2">milk</div>
                <div className="badge badge-secondary badge-outline mr-2">eggs</div>
                <div className="badge badge-accent badge-outline mr-2">chicken</div>
              </div>
              <div className="divider"></div>
              <div className="flex justify-evenly">
                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 w-auto">
                  {recipes.map((recipe) => {
                    return (
                      <div key={recipe.recipe.calories} className="group">
                        <Card recipe={recipe} />
                      </div>
                    );
                  })}
                </div>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default FindRecipes;
