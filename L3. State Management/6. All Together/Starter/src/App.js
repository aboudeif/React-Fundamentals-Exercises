import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import NewUser from "./components/NewUser";
import UserList from "./components/UserList";


const App = () => {
  const [users, setUsers] = useState([]);


  
    
  const handelAddition = user => setUsers([...users, user]);

  return (
    <div className="App">
      <Header />
      <NewUser handelAddition={handelAddition} users={users.map(u=>u.userName)} />
      <UserList users={users} />
    </div>
  );
};

export default App;
