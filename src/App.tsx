import React, { useState } from "react";
import { v4 } from "uuid";
import Greeter from "./components/Greeter";
import ShoppingList from "./components/ShoppingList";
import ShoppingForm from "./components/ShoppingForm";
import Item from "./models/item";
import "./App.css";

function App() {
  const [items, setItems] = useState<Item[]>([]);
  const additem = (product: string, quantity: number): void => {
    setItems([...items, { id: v4(), product, quantity }]);
  };
  return (
    <div>
      <Greeter person="Somename" />
      <ShoppingForm onAddItem={additem} />
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
