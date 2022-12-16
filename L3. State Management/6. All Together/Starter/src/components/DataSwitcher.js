import React from "react";
import "../css/toggle-switch.css";

const DataSwitcher = ({ dataVisibility, isDataVisible }) => {

  const handelChange = (e) => {
    dataVisibility();
  };

  return (
    <div className="container">
      <label className="switch">
        <input type="checkbox" id="switch" onChange={handelChange} />
        <span className="slider round">
          <label htmlFor="switch" className="label">
            {isDataVisible
              ? "Number of Games Played is shown"
              : "Number of Games Played is hidden"}
          </label>
        </span>
      </label>
    </div>
  );
};

export default DataSwitcher;
