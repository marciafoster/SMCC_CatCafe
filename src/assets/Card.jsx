import React from "react";
import CatsApi from "./CatsApi"

const Card = ({ breeds, handleCart }) => {
  return (
    <div className="card">
      <ul>
        {breeds.map((breed) => {
          return (
            <div className="breeds">
              <li key={breed.id}>
                <h3>{breed.name}</h3>
                <p>Price: ${breed.amount}</p>
                <img src={breed.img} alt="breeds"></img>
                <button
                  className="breeds
                   button"
                  onClick={() => {
                    handleCart(breed);
                  }}
                >
                  Adopt
                </button>
              </li>
            </div>
          );
        })}
        ;
      </ul>
    </div>
  );
};
export default Card;
