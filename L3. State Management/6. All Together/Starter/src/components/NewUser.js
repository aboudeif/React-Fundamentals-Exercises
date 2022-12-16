import React from "react";
import { useState } from "react";

const NewUser = ({ handelAddition, users }) => {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    userName: "",
  });
  const [validationMessage, setValidationMessage] = useState("");
  const [submitionStatus, setSubmitionStatus] = useState("disabled");

  // reset form inputs
  const resetForm = () => {
    setUserInfo({ firstName: "", lastName: "", userName: "" });
    clearValidationMessage();
    setSubmitionStatus(true);
  };

  // clear validation message
  const clearValidationMessage = () => {
    setValidationMessage("");
  };

  // form validation
  const validateUser = (user) => {
    if (users.filter((u) => u === user.userName).length > 0) {
      setValidationMessage(
        "User name already exists, please choose another one"
      );
      return false;
    }
    return true;
  };

  // enable/disable submit button
  const handelSubmitionStatus = () => {
    if (userInfo.firstName && userInfo.lastName && userInfo.userName)
      setSubmitionStatus(false);
    else setSubmitionStatus(true);
  };

  // set state on input change
  const handelUserInfo = (e) => {
    setUserInfo({ ...userInfo, [e.target.id]: e.target.value });
  };

  // handle input change
  const handelChange = (e) => {
    handelUserInfo(e);
    handelSubmitionStatus();
  };

  // handle form submition
  const handelSubmit = (e) => {
    e.preventDefault();
    if (validateUser(userInfo)) {
      handelAddition(userInfo);
      resetForm();
    }
  };

  return (
    <form onSubmit={handelSubmit}>
      <label htmlFor="firstName">First name </label>
      <input
        type="text"
        id="firstName"
        placeholder="First name"
        value={userInfo.firstName}
        onChange={handelChange}
        onClick={handelChange}
      />

      <br />
      <label htmlFor="lastName">Last name </label>
      <input
        type="text"
        id="lastName"
        placeholder="Last name"
        value={userInfo.lastName}
        onChange={handelChange}
        onClick={handelChange}
      />

      <br />
      <label htmlFor="userName">User name </label>
      <input
        type="text"
        id="userName"
        placeholder="@username"
        value={userInfo.userName}
        onChange={handelChange}
        onClick={handelChange}
      />

      <br />
      <label style={{ color: "red" }}>{validationMessage}</label>

      <br />
      <button type="submit" disabled={submitionStatus}>
        Submit
      </button>
    </form>
  );
};

export default NewUser;
