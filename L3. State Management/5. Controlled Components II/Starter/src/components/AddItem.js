import React from 'react'
import { useState } from "react";

const AddItem = ({ handelAddition }) => {
const [value, setValue] = useState("");


const handleChange = (event) => {
  setValue(event.target.value);
};

const inputIsEmpty = () => value === "";

const addItem = (event) => {
  event.preventDefault();
  handelAddition(value);
  setValue("");
};

  return (
    <form onSubmit={addItem}>
      <input
        type="text"
        placeholder="Enter New Item"
        value={value}
        onChange={handleChange}
      />
      <button disabled={inputIsEmpty()}>Add</button>
    </form>
  )
}

export default AddItem