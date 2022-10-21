import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FindRecipes = () => {
  const initialFormData = {
    mainIngredient: '',
    mealType: '',
    cuisineType: ''
  };
  const mainIngredients = ['chicken', 'beef', 'lamb', 'pork', 'vegetarian', 'vegan'];
  const mealTypes = ['breakfast', 'brunch', 'lunch/dinner', 'snack', 'teatime'];
  const cuisineTypes = ['mexican', 'indian', 'bbq', 'american', 'aussie'];
  const [formData, setFormData] = useState(initialFormData);

  const handleFormData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // axios.get("",{
    //   parameter: ["", ""],
    //   authorization: ""
    // })
    // .then(response => {
    //   console.log(response);
    // })
    // .catch(err => {
    //   console.error(err);
    // });
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
