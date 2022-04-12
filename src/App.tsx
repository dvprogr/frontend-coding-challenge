import React, { useState } from "react";
import "./App.css";
import examplePizzas from "./example-pizzas.json";
import PizzaTile from "./components/PizzaTile.tsx";

function App() {
  const [orders, setOrders] = useState([]);
  const [total, setTotal] = useState(0);

  const onItemOrder = (key: number) => {
    const newPizza = examplePizzas[key];
    setOrders([...orders, newPizza.name]);
    setTotal(total + newPizza.price);
  };

  return (
    <div className="App">
      <h1>Order pizza</h1>
      <p>Orders: {orders?.length > 0 ? orders : "Currently no orders"}</p>
      <p>Total: {total}</p>
      <div className="pizzaItems">
        {examplePizzas.map((x, key) => (
          <PizzaTile pizza={x} index={key} onItemOrder={onItemOrder} />
        ))}
      </div>
    </div>
  );
}

export default App;
