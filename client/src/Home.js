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
    <MainContent>
      <RouteContainer>
        <Routes>
          {dashboardRoutes.map(({ path, main}) => (
              <Route
                key={path}
                path={path}
                element={main()}
              />
            ))}
        </Routes>
      </RouteContainer>
    </MainContent>  
  </HomeContainer>  
  )
}

export default Home;

const HomeContainer = styled.div`
  display: flex;
  overflow-x: hidden;
  position: relative;
  
`;

const MainContent = styled.div`
  overflow-y: auto;
  height: calc(100vh - 60px); // Adjust this value based on your layout (substract the height of any fixed headers, footers, etc.)
  width: calc(100% - 240px); // Adjust this value based on your sidebar width.
`;

const RouteContainer = styled.div`
  height: 100%;
  width: 100%;
  overflow: auto;
`;