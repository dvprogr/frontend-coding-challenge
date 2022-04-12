import React from "react";
import "./PizzaTile.css";

const PizzaTile = (props) => {
  const {pizza, onItemOrder, key} = props;
  const ingredients = pizza.ingredients;
  return (
    <div className="pizzaTile">
      <div className="row">
        <p>{pizza.name}</p>
        <p>{pizza.price} €</p>
      </div>
      <h3 className="ingredientsTitle">Ingredients</h3>

      <div className="ingredients">
        {ingredients.map((i) => (
          <p className="ingredientItem">{i}</p>
        ))}
      </div>

      <button onClick={(key) => onItemOrder(key)}>Add to cart</button>
    </div>
  );
};

export default PizzaTile;
