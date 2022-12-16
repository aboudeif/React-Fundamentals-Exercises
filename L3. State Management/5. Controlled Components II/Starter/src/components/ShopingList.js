import React from 'react'
import AddItem from "./AddItem";
import { useState } from "react";
import ItemList from "./ItemList";

const ShopingList = () => {
const [items, setItems] = useState([]);

const addItem = (item) => {
  setItems([...items, item]);
};

const deleteLastItem = (event) => {
  setItems(items.slice(0, -1));
};

const noItemsFound = () => items.length === 0;

  return (
    <>
    <h2>Shopping List</h2>
    <AddItem handelAddition={addItem} />

    <button onClick={deleteLastItem} disabled={noItemsFound()}>
      Delete Last Item
    </button>

    <ItemList items={items} />
    </>
  )
}

export default ShopingList