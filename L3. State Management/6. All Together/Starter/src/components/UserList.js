import React from "react";
import User from "./User";
import DataSwitcher from "./DataSwitcher";
import { useState } from "react";

const UserList = ({ users }) => {
  const [isDataVisible, setIsDataVisible] = useState(false);

  const handelDataVisibility = () => setIsDataVisible((prev) => !prev);

  return (
    <div>
      <p>Users</p>
      <ul>
        <DataSwitcher
          dataVisibility={handelDataVisibility}
          isDataVisible={isDataVisible}
        />
        {users.map((user, index) => (
          <User
            key={index}
            isDataVisible={isDataVisible}
            firstName={user.firstName}
            lastName={user.lastName}
            userName={user.userName}
          />
        ))}
      </ul>
    </div>
  );
};

export default UserList;
