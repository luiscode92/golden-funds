import React from 'react'
import styled from '@emotion/styled'
import { Card, Divider } from 'antd';
import { css } from "@emotion/react";

function InfoAccount( infoAccount ) {

  const infoAccountData = [
    { 
      key: "balance",
      name: "Balance",
      data: `$ ${Math.trunc(infoAccount.infoAccount.balance)}`
    },
    {
      key:"profits", 
      name: "Profits",
      data: `$ ${Math.trunc(infoAccount.infoAccount.profit)}`
    },
    { 
      key:"deposit",
      name: "Deposito",
      data: `$ ${Math.trunc(infoAccount.infoAccount.deposit)}`
    },
    { 
      key: "drowdown",
      name: "Drowdown Actual",
      data: `$ ${Math.trunc(infoAccount.infoAccount.maxDrawdown)}`
    },
  ]

  return (
    <div style={{display:"flex", flexWrap: "wrap", height: 200}}>
      {infoAccountData && infoAccountData.map(info => 
        <Card style={{
            border: "1px solid #d4d4d4",
            margin: "3px",
            width: 250,
            borderRadius: "5%"
          }}
        >
          <Cardcontainer>
           <CardTitle>{info.name}:</CardTitle>
           <Divider />
           <CardContent> {info.data}</CardContent>
          </Cardcontainer>
         
        </Card>
      )}
    </div>
  )
}

export default InfoAccount

const Cardcontainer = styled.div`
  display: flex;
  flex-direction: column

`;

const CardTitle = styled.span`
  font-size: 20px;
  font-weight: bold;
  display:flex;
  justify-content: center;
`;

const CardContent = styled.span`
  font-size: 20px;
  display:flex;
  justify-content: center;
`;