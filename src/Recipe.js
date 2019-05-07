import React from 'react'
import style from './recipe.module.css'
import Toggle from './Toggle'
import { CSSTransition } from 'react-transition-group';


const Recipe = ({title,image, ingredients}) => {

    return(
        <div className={style.recipe}>
            <div className={style.recipe_cover}> 
                <img className={style.image}src={image} alt=''/>
                <h2> {title} </h2>
            </div>
            <Toggle 
                render={({on, toggle}) => (
                    <div className={style.expand_wrapper}>
                        <button className={style.expand_button} onClick={toggle} aria-label='expand'> Show Recipe </button>
                        {on && 
                            <ul>
                                {ingredients.map((ingredient, index) => (
                                    <CSSTransition in={on} timeout={200} classNames="appear"> 
                                        <li key={index}>{ingredient.text} </li>
                                    </CSSTransition>
                                ))}
                            </ul>
                        }
                    </div>
            )} /> 
        </div>
    )
}

export default Recipe