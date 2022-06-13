import React from 'react'
import styled from "@emotion/styled";
import { Button } from 'antd';
import DashboardCard from './DashboardCard';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import VerifiedOutlinedIcon from '@mui/icons-material/VerifiedOutlined';



export const Dashboard = () => {
  return (
    <div style={{
      display:"flex",  
      justifyContent: "center", 
      backgroundColor:"white",
      width:"80%",
      height: "100%",
      position:" absolute",
    }}>
      <DashboardContainer>
        <DashboardContent>
        <EmojiEventsIcon style={{width:"80px", height:"80px", margin:"40px", color: "#212529"}} />
          <h1>Evaluacion</h1>
          <P>Obten tu cuenta fondeada hasta $100.000</P>
          <Description>Demuestra tus habilidades alcanzando tu objetivo de ganancias. Pasa la evaluacion y empieza a tradear tu propia cuenta fondeada!</Description>
          <div style={{ 
            margin: "30px 0 40px 70px",
            alignSelf: 'center'
          }}>
            <Itemdescription><VerifiedOutlinedIcon style={{  verticalAlign: "middle"}} /> Opera hasta $100,000</Itemdescription>
            <Itemdescription><VerifiedOutlinedIcon style={{  verticalAlign: "middle"}} /> Demuestra tus habilidades como trader</Itemdescription>
            <Itemdescription><VerifiedOutlinedIcon style={{  verticalAlign: "middle"}} /> Alcanza tu objetivo de ganancias</Itemdescription>
            <Itemdescription><VerifiedOutlinedIcon style={{  verticalAlign: "middle"}} /> Respeta tus objetivos de trading</Itemdescription>
          </div>
          <ButtonStyled  size='large' onClick={() => window.open('https://goldenfunds.co/retos', '_blank')}>Empezar evaluacion</ButtonStyled>
        </DashboardContent>
      </DashboardContainer>
    </div>
    
  )
}

const DashboardContainer = styled.div`
  margin: 50px;
  padding: 2rem;
  width: 600px;
  height: 600px;
  box-shadow: 1px 1px 5px 4px #D9D9D9;
  background-color: #F8F9FA;
  display: flex;
  justify-content: center;

`;

const DashboardContent = styled.div`
  max-width: 400px;
  text-align: center;
  flex-direction: column;
`;

const P = styled.p`
  color: black;
  font-weight: bold;
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
const ButtonStyled = styled(Button)`
   border-radius: 10px;
   border: 2px solid black;
   width: 200px;
   background-color: black;
   color: white;
   &:hover {
     border: 2px solid black;
     color: black;
   }
   &:active {
    border: 2px solid black;
    color: black;
   }
 `;
 




