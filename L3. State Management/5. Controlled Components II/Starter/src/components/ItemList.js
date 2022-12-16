import React from 'react'
import Item from "./Item";

const ItemList = ({ items }) => {
  return (
    <>
      <p className="items">Items</p>
      <ol className="item-list">
        {items.map((item, index) => (
          <Item key={index} item={item}  />
        ))}
      </ol>
    </>
  )
}

export default ItemList