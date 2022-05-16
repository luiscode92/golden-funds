import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Sidebar from './components/sidebar/Sidebar'
import { Dashboard } from './components/Dashboard/Dashboard';
import { Accounts } from './components/Accounts/Accounts';
import { Profile } from './components/Profile/Profile';
import { Contact } from './components/Contact/Contact';
import { Downloads } from './components/Downloads/Downloads'
import styled from "@emotion/styled";

const Home = () => {

  const Main = () => {
    const routes = [
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
        main: () => (
          <Profile />
        )
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
      <MainContainer >
        {routes.map(route => (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        ))}
      </MainContainer>
    );
  }
  return (
    <Router>
      <HomeContainer>
        <Sidebar />
        <Main />
      </HomeContainer>
    </Router>

  
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
