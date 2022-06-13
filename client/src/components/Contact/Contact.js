import React from 'react'
import styled from '@emotion/styled'
import telegramLogo from "../../assets/telegramLogo.png"
import discordLogo from "../../assets/discordLogo.png"
import EmailIcon from '@mui/icons-material/Email';

export const Contact = () => {
  console.log("contact")
  return (
    <div style={{
      display:"flex", 
      justifyContent: "center", 
      width:"80%",
      height: "100%",
      backgroundColor:"white",
      position:" absolute",
    }}>
      <ContacttContainer>
        <h1>Como podemos ayudarte?</h1>
        <div style={{display:"flex"}}>
          <a href='https://t.me/goldenfundstraders'>
            <Card >
              <img src={telegramLogo} alt='telegrmlogo' style={{width:100 }} />
            </Card>
            </a>
          <a href='mailto:director@goldenfunds.co'>  
            <Card >
              <EmailIcon style={{color:"black", width:"100px", height:"100px"}} />
            </Card>
          </a>
        </div>
      </ContacttContainer>
    </div>

  )
}

const ContacttContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px;
  padding: 1rem;
  box-shadow: 1px 1px 5px 4px #D9D9D9;
  background-color: #F8F9FA;
  -webkit-flex-wrap: wrap;
  flex-direction:column;
  height: 300px;
  @media (max-width: 1400px) {
    height: 370px
  }
`;

const Card = styled.div`
  border: 1px solid #d4d4d4;
  margin: 3px;
  width: 250px;
  height: 150px;
  border-radius: 5%;
  display: flex;
  justify-content:center;
  align-items:center;
  &:hover {
    border: 2px solid black;
  }
`;
