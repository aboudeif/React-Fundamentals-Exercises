import React from 'react'
import logo from "../logo.svg";

const Header = () => {
  return (
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
    </header>
  )
}

export default Header