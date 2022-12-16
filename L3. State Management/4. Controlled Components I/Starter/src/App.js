import logo from "./logo.svg";
import "./App.css";
import { useState } from 'react'

const App = () => {
  const [text, setText] = useState('')
  const handelChange = event => setText(event.target.value)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">ReactND - Coding Practice</h1>
      </header>
      <div className="container">
        <input type="text" placeholder="Say Something" onChange={handelChange} />
        <p className="echo">Echo:</p>
        <p>{text}</p>
        <p>This should mirror the text you typed into the input field.</p>
      </div>
    </div>
  );
};

export default App;
