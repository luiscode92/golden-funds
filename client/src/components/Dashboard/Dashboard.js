import React from 'react'
import styled from "@emotion/styled";
import { Card } from 'antd';
import DashboardCard from './DashboardCard';



export const Dashboard = () => {
  return (
    <DashboardContainer>
      <Card 
        type="inner"  
        style={{
          border:"1px solid black",
          width:"450px",
          height: "600px",
          marginTop: "100px",
          borderRadius: "10px",

        }}
      >
        <DashboardCard />
      </Card>
    </DashboardContainer>
    
  )
}

const DashboardContainer = styled.div`
  display: flex;
  justify-content: center;
`;



