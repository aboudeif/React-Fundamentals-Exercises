import logo from "../logo.svg";
import React from 'react'

const Header = () => {
  return (
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
    </header>
  )
}

export default Header