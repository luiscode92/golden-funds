import React from 'react'
import styled from '@emotion/styled'
import mtLogo from "../../assets/metatrader5.png"

export const Downloads = () => {
  console.log("downloads")
  return (
    <div style={{
      display:"flex", 
      justifyContent: "center", 
      backgroundColor:"white",
      width:"80%",
      height: "100%",
      position:" absolute",
    }}>
      <DownloadContainer>
      <h1>Plataforma de trading</h1>
      <div  style={{display:"flex"}}>
        <div>
          <h3> Para Windows</h3>
          <a href='https://download.mql5.com/cdn/web/17666/mt5/tcbridge5setup.exe' >
            <Card >
              <img src={mtLogo} alt='telegrmlogo' style={{width:100 }} />
            </Card>
          </a>
        </div>
        <div>
          <h3>Para Mac</h3>
          <a href='https://download.mql5.com/cdn/web/metaquotes.software.corp/mt5/MetaTrader5.dmg' >
            <Card >
              <img src={mtLogo} alt='telegrmlogo' style={{width:100 }} />
            </Card>
            </a>  
        </div>
      </div>
     
      </DownloadContainer>
    </div>
  )
}

const DownloadContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px;
  padding: 1rem;
  box-shadow: 1px 1px 5px 4px #D9D9D9;
  background-color: #F8F9FA;
  -webkit-flex-wrap: wrap;
  flex-direction:column;
  height: 300px;
  @media (max-width: 1400px) {
    height: 370px
  }
`;

const Card = styled.div`
  border: 1px solid #d4d4d4;
  margin: 3px;
  width: 250px;
  height: 150px;
  border-radius: 5%;
  display: flex;
  justify-content:center;
  align-items:center;
  &:hover {
    border: 2px solid black;
  }
`;
