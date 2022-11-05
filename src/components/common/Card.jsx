import React from 'react';

const Card = ({ recipe }) => {
  return (
    <div className="card card-compact w-auto h-full glass">
      <figure>
        <img src={recipe.recipe.images.REGULAR.url} alt={recipe.recipe.label} width="100%" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{recipe.recipe.label}</h2>
        <p>{recipe.recipe.totalTime} mins</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">View More</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
