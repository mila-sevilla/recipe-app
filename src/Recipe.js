import React, { useState } from 'react'
import style from './recipe.module.css'
import { CSSTransition } from 'react-transition-group';

const Recipe = ({title,image, ingredients}) => {
    
    const [showRecipe, setShowRecipe] = useState(false)
    const toggleRecipe = () => setShowRecipe(!showRecipe)

    return(
        <div className={style.recipe}>
            <div className={style.recipe_cover}> 
                <img className={style.image}src={image} alt=''/>
                <h2> {title} </h2>
            </div>

            <div className={style.expand_wrapper}>
                <button 
                    className={style.expand_button} 
                    type="button" 
                    aria-label='expand'
                    onClick={toggleRecipe}>{showRecipe ? 'Hide Recipe' : 'Show Recipe'}
                </button>
                
                <CSSTransition 
                    in={showRecipe} 
                    timeout={200} 
                    classNames="expand"
                    unmountOnExit
                > 
                    <ul key={ingredients}> {ingredients.map((ingredient, index) => (
                        <li key={index}>
                            {ingredient.text} 
                        </li>))}
                    </ul>
                </CSSTransition>
            </div>
        </div>
    )
}

export default Recipe