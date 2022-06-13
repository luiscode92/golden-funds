 /* eslint-disable */
import React, { useContext } from "react";
import Home from "./Home";
import { UserContext } from "./context/UserContext";
import Login from "./components/Login";


const App = () => {
 const {user}= useContext(UserContext)

  return (
      <div>
        {user ? <Home /> : <Login/>}
      </div>
)};

export default App
