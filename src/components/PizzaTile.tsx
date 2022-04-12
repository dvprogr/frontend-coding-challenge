import React from "react";
import "./PizzaTile.css";

const PizzaTile = (props) => {
  const { pizza, onItemOrder, index } = props;
  const ingredients = pizza.ingredients;

  const onOrder = () => {
    onItemOrder(index);
  };

  return (
    <div className="pizzaTile">
      <div className="row">
        <p>{pizza.name}</p>
        <p>{pizza.price} €</p>
      </div>
      <h3 className="ingredientsTitle">Ingredients</h3>

      <div className="ingredients">
        {ingredients.map((i, key) => (
          <p key={key} className="ingredientItem">{i}</p>
        ))}
      </div>

      <button onClick={onOrder}>Add to cart</button>
    </div>
  );
};

export default PizzaTile;
