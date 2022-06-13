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

  const [ infoAccount, setInfoAccount ] = useState(null)
  const [ summaryAccount, setSummaryAccount] = useState(null)
  const {user}= useContext(UserContext)

  
  const accountInfo = (accountId) => { 
    try {
      fetch(`https://us-central1-dev-golden-funds.cloudfunctions.net/tradingAccount/statistics/${accountId}`, {mode: "cors"})
        .then(statisticsResponse => statisticsResponse.json())
        .then(data =>  setInfoAccount(data));
    }
    catch (e) {
      console.log(e)
    }
  }

  const accountSummary = async (accountId) => {
    try {
      fetch(`https://us-central1-dev-golden-funds.cloudfunctions.net/tradingAccount/summary/${accountId}`, {mode: "cors"})
        .then(summaryResponse => summaryResponse.json())
        .then(data =>  setSummaryAccount(data));
    }
    catch (e) {
      console.log(e)
    }
  }

  useEffect(() => { 
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        accountInfo(doc.data().accountId)
        accountSummary(doc.data().accountId)
      })
      }
    )
  }, [])
  return (
    <div style={{
      display:"flex", 
      alignItems: "center", 
      justifyContent: "center", 
      width:"80%",
      height: "100%",
      position:" absolute",
      backgroundColor:"white"
    }}>

    <AccountContainer>
      <div>
      {infoAccount ? 
          <>
            <h1>Cuenta</h1>
            <StatisticsContainer>
              <InfoAccount infoAccount={infoAccount} />   
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
                <SummaryAccount summaryAccount={summaryAccount} />
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
  box-shadow: 1px 1px 5px 4px #D9D9D9;
  background-color: #F8F9FA;
  -webkit-flex-wrap: wrap;
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