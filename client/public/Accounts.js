import styled from '@emotion/styled'
import { Card, Spin } from 'antd';
import React, {useEffect, useState} from 'react'
import InfoAccount from './InfoAccount'





export const Accounts = () => {

  const [ infoAccount, setInfoAccount] = useState(null)
  const accountInfo = async () => { 
    try {
      fetch('http://localhost:8080/statistics/', {mode:'cors'})
        .then(statisticsResponse => statisticsResponse.json())
        .then(data =>  setInfoAccount(data));

     
    }
    catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    accountInfo();
  }, [])
  return (
    <AccountsContainer>
      {infoAccount ? <InfoAccount infoAccount={infoAccount} /> : <Spin />}
    </AccountsContainer>
  )
}

const AccountsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem;
  padding: 1rem;
  width: auto;
  height: 500px;
  box-shadow: 1px 1px 5px 4px #D9D9D9;
  display flex
`;

