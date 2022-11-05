export const reducer = (state, action) => {
  switch (action.type) {
    case 'setRecipes': {
      return {
        ...state,
        recipes: state.recipes.concat(action.data)
      };
    }
    case 'setMyRecipes': {
      return {
        ...state,
        myRecipes: [...state.myRecipes, action.data]
      };
    }
    case 'setSelectedRecipes': {
      return {
        ...state,
        selectedRecipes: [...state.selectedRecipes, action.data]
      };
    }
    case 'setFavourites': {
      return {
        ...state,
        favourites: [...state.favourites, action.data]
      };
    }
    default:
      return state;
  }
};
