import React from 'react'
import style from './recipe.module.css'
import Toggle from './Toggle'

const Recipe = ({title,image, ingredients}) => {

    return(
        <div className={style.recipe}>
            <div className={style.recipe_cover}> 
                <img className={style.image}src={image} alt=''/>
            </div>
            <h2> {title} </h2>
            <Toggle 
                render={({on, toggle}) => (
                    <div>
                        <button onClick={toggle} aria-label='expand'> Show Recipe </button>
                        {on && 
                            <ul>
                                {ingredients.map(ingredient => (
                                    <li>{ingredient.text} </li>
                                ))}
                            </ul>
                        }
                    </div>
            )} /> 
        </div>
    )
}

export default Recipe