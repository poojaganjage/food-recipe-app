import React from 'react';

function RecipeTile({label, image, url}) {
  console.log(label);
  return (
    // image.match(/\.(jpeg|jpg|gif|png)$/) != null && (
    //     <div className='recipeTile'>
    //         <img className='recipeTile__image' src={image} alt='tile-image' />
    //         <p className='recipeTile__name'>{label}</p>
    //     </div>
    // )
    
    <div className='recipeTile'>
        <img className='recipeTile__image' src={image} alt='tile-image' onClick={() => window.open(url)} />
        <p className='recipeTile__name'>{label}</p>
    </div>
  );
}
export default RecipeTile;
