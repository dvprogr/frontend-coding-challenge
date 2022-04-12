import React, {useState} from "react";
import "./App.css";
import examplePizzas from "./example-pizzas.json";
import PizzaTile from "./components/PizzaTile.tsx";

function App() {
  const [orders, setOrders] = useState([]);

  const onItemOrder = (key) => {
    console.log("order item key: ", key)
  }

  return (
    <div className="App">
      <h1>Order pizza</h1>
      <p>Orders: {orders?.length > 0 ? orders : "Currently no orders"}</p>
      <div className="pizzaItems">
        {examplePizzas.map((x, key) => (
          <PizzaTile pizza={x} key={key} onItemOrder={onItemOrder} />
        ))}
      </div>

    </div>
  );
}

export default App;
