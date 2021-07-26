import React from 'react'

export const Rating = ({ id, color = "#FFA41C" }) => {
    const generateRandomInteger = (max) => {
        return Math.floor(Math.random() * max) + 1;
    }
    let value = generateRandomInteger(5);

  return (
    <div className="rating">
        
      {[1, 2, 3, 4, 5].map((rate, key) => (
          
        <span key={key}>
            
          <i
            style={{ color }}
            className={
                value + 1 === rate + 0.5
                ? "fas fa-star-half-alt"
                : value >= rate
                ? "fas fa-star"
                : "far fa-star"
            }
          ></i>
        </span>
      ))}
      &nbsp;
     <span>Reviews:{value}</span>
    </div>
  );
};
