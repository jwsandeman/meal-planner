import React, { useReducer } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
    recipes: {
      title: 'beef booginyung'
    }
  };

  const [store, dispatch] = useReducer(reducer, initialState);
  const { recipes } = store;

  return (
    <StateContext.Provider value={{ store, dispatch }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="find-recipes" replace />} />
          <Route path="find-recipes">
            <Route index element={<FindRecipes recipes={recipes} />} />
          </Route>
          <Route path="selected-recipes" element={<SelectedRecipes recipes={recipes} />} />
          <Route path="my-recipes" element={<MyRecipes recipes={recipes} />} />
          <Route path="shopping-list" element={<ShoppingList recipes={recipes} />} />
          <Route path="my-account" element={<MyAccount recipes={recipes} />} />
          <Route path="favourites" element={<Favourites recipes={recipes} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </StateContext.Provider>
  );
};

export default App;
