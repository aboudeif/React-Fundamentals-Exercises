import React from "react";

const User = ({ firstName, lastName, userName, isDataVisible }) => {
  return (
    <li style={{ listStyleType: "none" }}>
      <span style={{ paddingRight: "4px" }}>
        {firstName} {lastName}
      </span>
      <small> @{userName} </small>
      <span>played {isDataVisible ? "0" : "*"} games</span>
    </li>
  );
};

export default User;
