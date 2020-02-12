import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { Recipe } from './components/Recipe';

function App() {
  const APP_ID = "8160aeca";
  const APP_KEY = "4ea095d280a0984d221c7642968d6c54	";
  const reqUrl = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await axios.get(reqUrl);
    // const data = await response;
    setRecipes(response.data.hits);
    console.log(response.data.hits);
  };

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-btn" type="submit">
          Search
        </button>
      </form>
      {recipes.map(recipe => (
        // <Recipe title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image}/>
        <Recipe recipe={recipe} />
      ))}
    </div>
  );
}

export default App;
