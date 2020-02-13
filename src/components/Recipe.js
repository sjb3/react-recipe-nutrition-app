// import React from 'react';
//
// export const Recipe = ({title, calories, image}) => {
//   return (
//     <div>
//       <h1>{title}</h1>
//       <h2>{calories}</h2>
//       <img src={image} alt={image} />
//     </div>
//   )
// }

import React from "react";
import style from './recipe.module.css';

export const Recipe = ({ recipe }) => {
  return (
    <div className={style.recipe}>
      <h1>{recipe.recipe.label}</h1>
      <ul>
        {recipe.recipe.ingredients.map(ingredient => (
          <li key={ingredient.text}>
            {ingredient.text}
          </li>
        ))}
      </ul>
      <h2>Cal: {recipe.recipe.calories}</h2>
      <img src={recipe.recipe.image} alt={recipe.recipe.image} />
    </div>
  );
};
