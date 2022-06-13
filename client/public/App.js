 /* eslint-disable */
import React from "react";
import Home from "./Home";
import Landing from './components/Landing/Landing'
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from '../src/service/firebase'
import App2 from "./Layout";


const App = () => {
  const [user, loading, error] = useAuthState(auth);
  console.log(user)

  return (
      <div>
        {user ? <Home /> : <Landing />}
      </div>
)};

export default App
