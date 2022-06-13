import React, { useState } from 'react'
import styled from '@emotion/styled'
import { Card, Tag } from 'antd';

function SummaryAccount( summaryAccount ) {
  const [daysObjective, setDaysObjective] = useState()
  const [dailyLoss, setDailyLosts] = useState()
  const space = " "
  const sumamryAccountData= [
      {
          key:"days",
          name: 'Operar un minimo de dias   ',
          target: Math.trunc(summaryAccount.summaryAccount[0].target),
          current: Math.trunc(summaryAccount.summaryAccount[0].current),
          status: function(target, current) {
            if (current >= target)
              {
                return true;
              }else {
                return false;
              }
          },
      },
      {
          key:"daily loss",
          name: "Perdida maxima permitida de $",
          current: Math.trunc(summaryAccount.summaryAccount[1].target),
          target: Math.trunc(summaryAccount.summaryAccount[1].current),
          status: function(target, current) {
            if (target <= current)
              {
                return false;
              }else {
                return true;
              }
          },
      },
      {
          key:"max loss",
          name: "Perdina maxima al final del dia de $",
          target: Math.trunc(summaryAccount.summaryAccount[2].target),
          current: Math.trunc(summaryAccount.summaryAccount[2].current),
          status: function(target, current) {
            if (target >= current)
              {
                return false;
              }else {
                return true;
              }
          },
      },
      {
          key:"profit",
          name: "Objetivo de ganancias de $ ",
          target: Math.trunc(summaryAccount.summaryAccount[3].target),
          current: Math.trunc(summaryAccount.summaryAccount[3].current),
          status: function(target, current) {
            if (current <= target)
              {
                return false;
              }else {
                return true;
              }
          },
      }
  ]

    console.log(sumamryAccountData)
 

  return (
    <Cardcontainer>
      { sumamryAccountData &&  sumamryAccountData.map(summary => 
        <Card style={{
            border: "1px solid #d4d4d4",
            margin: "3px",
            borderRadius: "10px"
          }}
        >
          <CardContent>
            {summary.name}&nbsp;<spam style={{fontWeight: "bold"}}>{summary.target}</spam>
            <TagContainer>{summary.status(summary.target, summary.current) ? <Tag color="success">Pasado</Tag> : <Tag color="error">En proceso</Tag>}</TagContainer>
            </CardContent>
        </Card>
      )}
  </Cardcontainer>
  )
}

export default SummaryAccount

const Cardcontainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const TagContainer = styled.div`
  position:absolute;
  right: 0;
  margin-right: 20px
`;

const CardContent = styled.span`
  font-size: 20px;
  display:flex;
`;