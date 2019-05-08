import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import {
  recipe,
  recipe_cover,
  expand_wrapper,
  expand_button,
  active,
} from './recipe.module.css';

const Recipe = ({ title, image, ingredients }) => {
  const [showRecipe, setShowRecipe] = useState(false);
  const toggleRecipe = () => setShowRecipe(!showRecipe);

  return (
    <div className={recipe}>
      <div className={recipe_cover}>
        <img className={image} src={image} alt="" />
        <h2> {title} </h2>
      </div>

      <div className={expand_wrapper}>
        <button
          className={`${expand_button} ${showRecipe ? active : ''}`}
          type="button"
          aria-label="expand"
          onClick={toggleRecipe}>
          {showRecipe ? 'Hide Recipe' : 'Show Recipe'}
          <img
            className="arrow_down"
            alt="arrow"
            src="/static/media/arrow_down.svg"
          />
        </button>

        <CSSTransition
          in={showRecipe}
          timeout={200}
          classNames="expand"
          unmountOnExit>
          <ul key={ingredients}>
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient.text}</li>
            ))}
          </ul>
        </CSSTransition>
      </div>
    </div>
  );
};

export default Recipe;
