import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {
  const APP_ID = '0e82bcb9';
  const APP_KEY = 'af43474ad40246b9beedbc7fe3b3e67b';

  const [loading, setLoading] = useState(false);
  const [recipes, setRecipes] = useState(null);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      return response.json();
    }
    fetchData()
      .then(({ hits }) => {
        setLoading(false);
        setRecipes(hits);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [query]);

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  };

  return (
    <div className="App">
      <h1> Recipes </h1>
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
          placeholder="Enter e.g. chicken"
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="flexWrapper">
        {loading && (
          <div className="loader">
            Searching for recipes ...
            <div className="loader_spinner" />
          </div>
        )}
        {recipes && !recipes.length && (
          <p className="noRecipesFound">
            No recipes found, try something else!
          </p>
        )}
      </div>
      <div className="recipes">
        {recipes &&
          recipes.map(({ recipe }) => {
            const { label, calories, image, ingredients } = recipe;
            return (
              <Recipe
                key={label}
                title={label}
                calories={calories}
                image={image}
                ingredients={ingredients}
              />
            );
          })}
      </div>
    </div>
  );
};

export default App;
