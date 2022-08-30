
import './App.css';
import React, {useEffect, useState} from 'react'
import Register from './components/Register';
import styled from '@emotion/styled';
import Header from './components/Header';
import UsersTable from "./components/usersTable";

function App() {
  return (
    <div style={{
      display:"flex", 
      flexDirection:"column",
      justifyContent: "center", 
      alignItems: "center",
    }}>
      <Header />
      <RegisterContainer>
        <Register/>
      </RegisterContainer>
      <UsersTableContainer>
        <UsersTable />
      </UsersTableContainer>
    </div>
  );
}

export default App;

const RegisterContainer = styled.div`
  border: 1px solid #d9d9d9;
  border-radius: 30px;
  width: 800px;
  background-color: #F8F9FA;
  padding: 30px;
`;
const UsersTableContainer = styled.div`
  margin-top: 100px
`
