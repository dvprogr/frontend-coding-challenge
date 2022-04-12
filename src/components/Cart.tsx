import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { orders, total, toggleClose, confirmOrder } = props;
  return (
    <div className="cart-active">
      <div className="cart-header">
        <p>Cart</p>
      </div>
      <p className="items">
        {orders?.length > 0
          ? orders.map((x, key) => <p key={key}>{x}</p>)
          : "Currently no orders"}
      </p>
      <p>Total: {total}</p>

      <div className="cart-header">
        <button onClick={() => confirmOrder()}>finish order</button>
        <button onClick={() => toggleClose()}>Close</button>
      </div>
    </div>
  );
};

export default Cart;
