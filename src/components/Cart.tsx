import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { orders, total, toggleClose, confirmOrder } = props;
  return (
    <div className="cart-active">
      <div className="cart-header">
        <p>Cart</p>
        <button onClick={() => toggleClose()}>Close</button>
      </div>
      <p className="items">
        {orders?.length > 0
          ? orders.map((x, key) => <p key={key}>{x}</p>)
          : "Currently no orders"}
      </p>
      <div className="cart-header">
        <p>Total: {total}</p>
        <button onClick={() => confirmOrder()}>finish order</button>
      </div>
    </div>
  );
};

export default Cart;
