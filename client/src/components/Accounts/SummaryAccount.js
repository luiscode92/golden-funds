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

function SummaryAccount( ) {
  const [daysObjective, setDaysObjective] = useState()
  const [dailyLoss, setDailyLosts] = useState()
  const space = " "

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
          target: "$1000",
          current: "$1000",
          status: "success"
      },
      {
          key:"daily loss",
          name: "Perdida maxima permitida de $",
          current: "$1000",
          target: "$1000",
          status: "success"
      },
      {
          key:"max loss",
          name: "Perdina maxima al final del dia de $",
          target: "$1000",
          current: "$1000",
          status: "success"
      },
      {
          key:"profit",
          name: "Objetivo de ganancias de $ ",
          target: "$1000",
          current: "$1000",
          status: "success"
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