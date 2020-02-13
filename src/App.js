import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { Recipe } from "./components/Recipe";
import { Button, TextField } from '@material-ui/core';

function App() {
  const APP_ID = "8160aeca";
  const APP_KEY = "4ea095d280a0984d221c7642968d6c54	";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('korean');

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await axios.get(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    // const data = await response;
    setRecipes(response.data.hits);
    console.log(response.data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return (
    <div className="App">
      <h1 className='main-title'>Recipe Search!</h1>
      <form className="search-form" onSubmit={getSearch}>
        <TextField required id="search-bar" label='Search...' type="text" value={search} onChange={updateSearch} />
        <Button variant="contained" color="primary" className="search-btn" type="submit">
          Search
        </Button>
      </form>
      <div className='recipes'>
      {recipes.map(recipe => (
        // <Recipe title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image}/>
        <Recipe recipe={recipe} key={recipe.recipe.label} />
      ))}
      </div>
    </div>
  );
}

export default App;
