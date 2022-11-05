import React, { useReducer } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound.jsx';
import Navbar from './components/common/Navbar.jsx';
import Favourites from './components/pages/Favourites.jsx';
import FindRecipes from './components/pages/FindRecipes.jsx';
import MyAccount from './components/pages/MyAccount.jsx';
import MyRecipes from './components/pages/MyRecipes.jsx';
import SelectedRecipes from './components/pages/SelectedRecipes.jsx';
import ShoppingList from './components/pages/ShoppingList.jsx';
import { reducer } from './utils/reducer.jsx';
import { StateContext } from './utils/stateContext.jsx';

const App = () => {
  const initialState = {
    loggedInUser: sessionStorage.getItem('email') || null,
    loggedInUserId: sessionStorage.getItem('id') || null,
    token: sessionStorage.getItem('token') || null,
    recipes: [],
    myRecipes: [],
    selectedRecipes: [],
    favourites: []
  };
  const [store, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={{ store, dispatch }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="find-recipes" replace />} />
          <Route path="find-recipes">
            <Route index element={<FindRecipes />} />
          </Route>
          <Route path="selected-recipes" element={<SelectedRecipes />} />
          <Route path="my-recipes" element={<MyRecipes />} />
          <Route path="shopping-list" element={<ShoppingList />} />
          <Route path="my-account" element={<MyAccount />} />
          <Route path="favourites" element={<Favourites />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </StateContext.Provider>
  );
};

export default App;
