import React from "react";

export const Tile = ({tile}) => {

  const tileArr = Object.values(tile);

  return (
    <div className="tile-container">
      
      {tileArr.map((el, i) => (        
        <p key={i} className={`${i===0 ? 'tile-title' : ''} tile`}>{el}</p>        
      ))} 

    </div>
  );
};
