import React, { useState } from 'react'
import styled from '@emotion/styled'
import { Card, Tag } from 'antd';
import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
  MinusCircleOutlined,
  SyncOutlined,
} from '@ant-design/icons';

function SummaryAccount( summaryAccount ) {
  const [daysObjective, setDaysObjective] = useState()
  const [dailyLoss, setDailyLosts] = useState()
  const space = " "
  console.log("summary", summaryAccount)

  const accountStatus = (current, target) => {
    switch (current <= target) {
      case true:
        return "Pasado";
        break;
      case false:
        return "Perdido";
        break;
      default:
        return "En proceso";
        break;
    }
  };

  const sumamryAccountData= [
      {
          key:"days",
          name: 'Operar un minimo de dias   ',
          target: Math.trunc(summaryAccount.summaryAccount[0].target),
          current: Math.trunc(summaryAccount.summaryAccount[0].current),
          status: summaryAccount.summaryAccount[0].status
      },
      {
          key:"daily loss",
          name: "Perdida maxima permitida de $",
          current: Math.trunc(summaryAccount.summaryAccount[1].target),
          target: Math.trunc(summaryAccount.summaryAccount[1].current),
          status: summaryAccount.summaryAccount[1].status
      },
      {
          key:"max loss",
          name: "Perdina maxima al final del dia de $",
          target: Math.trunc(summaryAccount.summaryAccount[2].target),
          current: Math.trunc(summaryAccount.summaryAccount[2].current),
          status: summaryAccount.summaryAccount[2].status
      },
      {
          key:"profit",
          name: "Objetivo de ganancias de $ ",
          target: Math.trunc(summaryAccount.summaryAccount[3].target),
          current: Math.trunc(summaryAccount.summaryAccount[3].current),
          status: summaryAccount.summaryAccount[3].status
      }
  ]

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
            {summary.name}&nbsp;<span style={{fontWeight: "bold"}}>{summary.target}</span>
            <TagContainer>
              {summary.status === "success" ? 
                <Tag color="#87d068">Pasado</Tag> 
                : 
                <Tag color="#f50" >Perdida</Tag>
              }
            </TagContainer>
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