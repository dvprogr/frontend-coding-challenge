import React, { useState } from "react";
import "./App.css";
import examplePizzas from "./example-pizzas.json";
import PizzaTile from "./components/PizzaTile.tsx";
import Cart from "./components/Cart.tsx";

function App() {
  const [orders, setOrders] = useState([]);
  const [total, setTotal] = useState(0);
  const [openCart, setOpenCart] = useState(false);

  const onItemOrder = (key: number) => {
    const newPizza = examplePizzas[key];
    setOrders([...orders, newPizza.name]);
    setTotal(total + newPizza.price);
  };

  const confirmOrder = () => {
    if(orders.length == 0) {
      alert("Cart is empty!");
      return;
    }

    const msg =  orders.map(x => x + " ") + " . Total: " + total;
    alert(`Your order is confirmed. Order summary: ${msg}`);
    setOrders([]);
    setTotal(0);
  };

  const toggleClose = () => {
    setOpenCart(!openCart);
  };

  return (
    <div className="App">
      <h1>🍕 Order pizza</h1>
      <button className="cart-button" onClick={() => setOpenCart(!openCart)}>Open Cart ({orders.length} items)</button>

      {openCart && (
        <Cart
          orders={orders}
          total={total}
          confirmOrder={confirmOrder}
          toggleClose={toggleClose}
        />
      )}

      <div className="pizzaItems">
        {examplePizzas.map((x, key) => (
          <PizzaTile key={key} pizza={x} index={key} onItemOrder={onItemOrder} />
        ))}
      </div>
    </div>
  );
}

export default App;
