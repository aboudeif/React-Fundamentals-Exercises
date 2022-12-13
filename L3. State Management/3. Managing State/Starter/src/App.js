import { useState } from "react";
import corgi from "./corgi.jpg";
import "./App.css";

const App = () => {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const state = [<>&#129293;</>, <>&#10084;&#65039;</>];
  return (
    <div className="container">
      <h2>Like this photo!</h2>
      <img src={corgi} alt="Corgi"></img>
      <p>likes: {likes}</p>
      <button onClick={() => setLikes((prev) => prev + 1)}>Increment people likes</button>
      <p>Do you like this photo? </p>
      <div
        style={{
          fontSize: "18pt",
          cursor: "pointer",
        }}
        onClick={() => {
          setLiked(!liked);
          setLikes((prev) => liked ? prev - 1 : prev + 1);
        }}
      >
        {state[+liked]}
      </div>
    </div>
  );
};

export default App;
