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

import React from 'react';

export const Recipe = ({recipe}) => {
  return (
    <div>
      <h1>{recipe.recipe.title}</h1>
      <h2>{recipe.recipe.calories}</h2>
      <img src={recipe.recipe.image} alt={recipe.recipe.image} />
    </div>
  )
}
