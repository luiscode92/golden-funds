/* eslint-disable */
import React, {useEffect, useState, useContext} from 'react'
import styled from '@emotion/styled'
import {
  Form,
  Input,
  Button,
} from 'antd';
import 'antd/dist/antd.css';
import { Link, useNavigate} from "react-router-dom";
import {
  sendPasswordReset,
  logInWithEmailAndPassword,
}from '../service/firebase'
import { UserContext } from '../context/UserContext';
import logo from '../assets/logoBlack.png'
import '../App.css';

const Login = () => {

  const {user}= useContext(UserContext)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [recovery, setRecovery]= useState(false)
  const navigate = useNavigate();
  console.log(recovery)

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    !recovery ? logInWithEmailAndPassword(email, password) : sendPasswordReset(email)
  };


  useEffect(() => {
    if (user) navigate("/dashboard");
    console.log(user)
  }, [user]);

  return (
    <div style={{
      display:"flex", 
      justifyContent: "center", 
      flexDirection:"column",
      alignItems: "center",
    }}>
      <div >
        <img src={logo} alt="logo" style={{width: "100%", maxWidth: "300px", height: "auto"}} /> 
      </div>
      <LoginContainer>
          <div style={{
            display:"flex", 
            flexDirection:"column",
            justifyContent: "center", 
            alignItems: "center",
          }}>
            <div >
              <h1 style={{fontWeight:"bold"}}>Login</h1>
            </div>
          <Form
            name='useForm'
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 30 }}
            layout="horizontal"
            size='large'
            onFinish={onFinish}
          >
            <Form.Item  name="email" value={email} onChange={(e) => setEmail(e.target.value)}>
              <InputStyled placeholder='Email' />
            </Form.Item>
            {!recovery && <Form.Item  name="password" value={password} onChange={(e) => setPassword(e.target.value)}>
              <InputStyled  placeholder='Contraseña' />
            </Form.Item> }

            <Form.Item style={{  
                display: "flex",
                justifyContent: "center"
            }}>
              <ButtonContainer>
                <ButtonStyled htmlType='submit'>{!recovery ? "Iniciar Sesion" : "Recuperar Contraseña"}</ButtonStyled>
                <div style={{
                  display:"flex", 
                  flexDirection:"column",
                  justifyContent: "center", 
                  alignItems: "center",
                }}>
                {!recovery && <h3>Olvidaste tu {" "} <a onClick={() => setRecovery(true)} style={{color:"black", fontWeight:"bold"}}>&nbsp;contraseña</a></h3> }
                </div>  
              </ButtonContainer>
            </Form.Item>
          </Form>
          </div>
      </LoginContainer>
    </div>
  )
}

export default Login;


const LoginContainer = styled.div`
  border: 1px solid #d9d9d9;
  border-radius: 30px;
  width: 800px;
  height: auto;
  background-color: #F8F9FA;
`;


const ButtonContainer = styled.div`
  displar:flex;
  justify-content: center;
  aling-items:center;
`;

const InputStyled = styled(Input)`
border-radius: 10px;
&:hover {
  border: 2px solid black;
}
&:focus {
 border: 2px solid black;
 box-shadow: 1px 1px 5px 4px #D9D9D9;
}
`;

const ButtonStyled = styled(Button)`
border-radius: 10px;
border: 2px solid black;
width: 100%;
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



const P = styled.p`
  mergin
`;