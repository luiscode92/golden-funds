import styled from '@emotion/styled'
import { Card, Spin } from 'antd';
import React, {useEffect, useState, useContext} from 'react'
import { UserContext } from '../../context/UserContext';
import { db } from '../../service/firebase';
import InfoAccount from './InfoAccount'
import SummaryAccount from './SummaryAccount';


export const Accounts = () => {

  const [ infoAccount, setInfoAccount ] = useState(false)
  const {user}= useContext(UserContext)


    setTimeout(() => {
      setInfoAccount(true);
    }, "1000");
 
  return (
    <div style={{
      display:"flex", 
      alignItems: "center", 
      justifyContent: "center", 
      height: "100%",
      position:" absolute"
    }}>

    <AccountContainer>
      <div>
      {
        infoAccount ? 
          <>
            <h1>Cuenta</h1>
            <SectionContainer>
              <InfoAccount />   
            </SectionContainer> 
          </> : <Spin />
      }
      </div>
      <div>
      {
        infoAccount ? 
          <>
            <h1>Objetivos</h1>
            <SectionContainer>
              <SummaryAccount />
            </SectionContainer>
          </> : <Spin /> 
      }
      </div>
      <div>
      {
        infoAccount ? 
          <>
            <h1>Objetivos</h1>
            <SectionContainer>
              <SummaryAccount />
            </SectionContainer>
          </> : <Spin /> 
      }
      </div>
    </AccountContainer>
          
    </div>
  )
}

const SectionContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
  padding: 1rem;
  border-radius: 30px;
  background-color: #F8F9FA;
  flex-wrap: wrap;
  height: auto;
  @media (max-width: 1400px) {
    height: 370px
  }
`;



const AccountContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem;
  
`