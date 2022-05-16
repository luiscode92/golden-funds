import React from 'react'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import styled from '@emotion/styled';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';

function DashboardCard() {
  return (
    <DashboardCardContainer>
        <EmojiEventsIcon style={{width:"80px", height:"80px", margin:"40px", color: "#212529"}} />
        <h1>Reto</h1>
        <P>Obten tu cuenta fondeada hasta $200.000</P>
        <Description>Demonstrate your skills with achieving our Profit Target. Pass the Evaluation course and start trading on your funded account!</Description>
        <div style={{ 
          margin: "30px 0 40px 70px",
          alignSelf: 'center'
        }}>
          <Itemdescription><VerifiedOutlinedIcon style={{  verticalAlign: "middle"}} /> Accounts up to $200,000</Itemdescription>
          <Itemdescription><VerifiedOutlinedIcon style={{  verticalAlign: "middle"}} /> Demonstrate your trading skills</Itemdescription>
          <Itemdescription><VerifiedOutlinedIcon style={{  verticalAlign: "middle"}} />  Achieve our Profit Targets</Itemdescription>
          <Itemdescription><VerifiedOutlinedIcon style={{  verticalAlign: "middle"}} /> Respect our Trading Objectives</Itemdescription>
        </div>
        <Button>Start challenge</Button>
    </DashboardCardContainer>

  )
}

export default DashboardCard

const DashboardCardContainer = styled.div`
  text-align: center;
  padding: 20px;
`;
const P = styled.p`
  color: red;
  font-weight: normal;
  font-size: 18px;
`;

const Description = styled.div`
  color: grey;
`;

const Itemdescription = styled.p`
  color: black;
  margin: auto;

  text-align: left;
`;

const Button = styled.div`
  border: 1px solid white;
  padding: 10px 20px 10px 20px;
  background-color: red;
  color: white;
  cursor: pointer;
  border-radius: 25px;
  &:hover {
    background-color: grey;
    border-radius: 25px;
    color: white;
  }
`;

