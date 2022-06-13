
import './App.css';
import React, {useEffect, useState} from 'react'
import Register from './components/Register';
import styled from '@emotion/styled';
import Header from './components/Header';

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
    </div>
  );
}

export default App;

const RegisterContainer = styled.div`
  border: 1px solid #d9d9d9;
  border-radius: 30px;
  width: 800px;
  background-color: #F8F9FA;
  padding: 30px
`;
