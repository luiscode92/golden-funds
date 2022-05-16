
import React, { useEffect, useState } from "react";
import firebase from './service/firebase';

import Login from './components/Login'

import Header from "./components/Header/Header";
import Home from "./Home";
import Register from "./components/Register";


const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {

      setUser(user);
    })
  }, [])
  
  console.log(user);
  return (
    <>
        {user ? 
        <div style={{display:"flex", flexDirection:"column"}}>
          <Home />
        </div>
       : <Register /> }
    </>
)};

export default App
