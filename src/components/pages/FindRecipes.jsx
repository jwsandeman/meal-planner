import React from 'react';

const FindRecipes = () => {
  const mainIngredients = ['chicken', 'beef', 'lamb', 'pork', 'vegetarian', 'vegan'];

  return (
    <div className="container mx-auto p-4 bg-green-500 artboard artboard-horizontal phone-6">
      <div className="form-control">
        <div className="input-group">
          <select className="select select-bordered">
            <option disabled selected>
              Main Ingredient
            </option>
            {mainIngredients.map((ingredient) => {
              return (
                <option key={ingredient} value={ingredient}>
                  {ingredient}
                </option>
              );
            })}
          </select>
          <button className="btn">Go</button>
        </div>
      </div>
    </div>
  );
};

export default FindRecipes;
