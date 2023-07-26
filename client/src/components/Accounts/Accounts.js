import styled from '@emotion/styled'
import { Card, Spin } from 'antd';
import React, {useEffect, useState, useContext} from 'react'
import { UserContext } from '../../context/UserContext';
import { db } from '../../service/firebase';
import InfoAccount from './InfoAccount'
import {
  query,
  collection,
  onSnapshot,
  where,

} from "firebase/firestore";
import SummaryAccount from './SummaryAccount';


export const Accounts = () => {

  const [ infoAccount, setInfoAccount ] = useState(false)
  const [ summaryAccount, setSummaryAccount] = useState(false)
  const {user}= useContext(UserContext)


    setTimeout(() => {
      setInfoAccount(true);
      setSummaryAccount(true)
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
      {infoAccount ? 
          <>
            <h1>Cuenta</h1>
            <StatisticsContainer>
              <InfoAccount />   
            </StatisticsContainer> 
          </>

            : 
            <Spin />
          }
      </div>
      <div>
          {summaryAccount ? 
            <>
              <h1>Objetivos</h1>
              <SummaryContainer>
                <SummaryAccount />
              </SummaryContainer>
            </>
          
            : 
            <Spin /> 
          }
      </div>
    </AccountContainer>
          
    </div>
  )
}

const StatisticsContainer = styled.div`
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

const SummaryContainer = styled.div`
  background-color: #F8F9FA;
  padding: 1rem;
  width: auto;
  height: auto;
  @media (max-width: 1400px) {
    height: 370px
  }
  box-shadow: 1px 1px 5px 4px #D9D9D9;
`;

const AccountContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem;
  
`