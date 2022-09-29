export const reducer = (state, action) => {
  switch (action.type) {
    case 'setRecipes': {
      return {
        ...state,
        recipes: action.data
      };
    }
    default:
      return state;
  }
};
