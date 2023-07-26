import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Sidebar from './components/sidebar/Sidebar'
import { Dashboard } from './components/Dashboard/Dashboard';
import { Accounts } from './components/Accounts/Accounts';
import { Profile } from './components/Profile/Profile';
import { Contact } from './components/Contact/Contact';
import { Downloads } from './components/Downloads/Downloads'
import styled from "@emotion/styled";

const Home = () => {

    const dashboardRoutes = [
      {
        path: "/",
        main: () => (
          <Accounts />
          
        ),
        exact: true
      },
      {
        path: "/dashboard",
        main: () => (
          <Dashboard />
        )
      },
      {
        path: "/accounts",
        main: () => (
          <Dashboard />
        )
      },
      {
        path: "/profile",
        main: () => <Profile />
      },
      {
        path: "/contact",
        main: () => (
          <Contact />
        )
      },
      {
        path: "/downloads",
        main: () => (
         <Downloads />
        )
      }
    ];
  
   
  
  return (

  <HomeContainer>
    <Sidebar />
    <div>
      <Routes>
        {dashboardRoutes.map(({ path, main}) => (
            <Route
              key={path}
              path={path}
              element={main()}
            />
          ))}
      </Routes>
    </div>  
  </HomeContainer>  
  )
}

export default Home;

const HomeContainer = styled.div`
  display: flex;
  overflow-x: hidden;
  position: relative;
`;