import styled from '@emotion/styled'
import React from 'react'
import AccountsCard from './AccountsCard'


export const Accounts = () => {
  console.log("accounts")
  return (
    <AccountsContainer>
     <AccountsCard />
     <AccountsCard />
     <AccountsCard />
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