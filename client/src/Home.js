import React, { useEffect, useState } from "react";
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
          <Dashboard />
        ),
        exact: true
      },
      {
        path: "/accounts",
        main: () => (
          <Accounts />
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
    <div>
      <HomeContainer>
        <Sidebar />
        <MainContainer>
          <Routes>
            {dashboardRoutes.map(({ path, main}) => (
                <Route
                  key={path}
                  path={path}
                  element={main()}
                />
              ))}
          </Routes>
        </MainContainer>
      </HomeContainer>
    </div>

  
  )
}

export default Home;

const HomeContainer = styled.div`
  display: flex
`;

const MainContainer = styled.div`
  width: 70%;
  height: 100%;
  background-color: #F8F9FA;
`;