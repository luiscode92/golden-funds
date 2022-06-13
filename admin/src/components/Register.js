 /* eslint-disable */
 import React, {useEffect, useState, useContext} from 'react'
 import styled from '@emotion/styled'
 import {
   Form,
   Input,
   Button,
   Alert,
 } from 'antd';
 import 'antd/dist/antd.css';
 import {
   auth,
   registerWithEmailAndPassword,
   signInWithGoogle,
 }from '../firebase'
 
 
 function Register() {
    const [form] = Form.useForm();
   const [email, setEmail] = useState("");
   const [name, setName] = useState("");
   const [country, setCountry] = useState("");
   const [city, setCity] = useState("");
   const [address, setAddress] = useState("");
   const [phone, setPhone] = useState("");
   const [accountId, setAccountId] = useState("");
   const [user, setUser] = useState(false)

  
   const onFinish = event => {
    var password = Math.random().toString(36).slice(-8);
    registerWithEmailAndPassword(name, email, password, address, phone, accountId).then(user => user && setUser(true));
    
   };
 
   return (
     <div style={{ display: "flex", }}>
       <div style={{width: 500, marginLeft: 30}}>
       <Form
         name='useForm'
         labelCol={{ span: 10,  }}
         wrapperCol={{ span: 20}}
         layout="horizontal"
         onFinish={onFinish}
         form={form}
       >
         <Form.Item label="Nombre" name="firstName" value={name} onChange={(e) => setName(e.target.value)}  >
           <InputStyled  />
         </Form.Item>
         <Form.Item label="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} >
           <InputStyled />
         </Form.Item>
         <Form.Item label="Direccion" name="address" value={address} onChange={(e) => setAddress(e.target.value)} >
           <InputStyled />
         </Form.Item>
         <Form.Item label="Celular" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)}>
           <InputStyled />
         </Form.Item >
         <Form.Item label="Trading account" name="accountId" value={accountId} onChange={(e) => setAccountId(e.target.value)} >
           <InputStyled />
         </Form.Item >
         <Form.Item style={{  
             display: "flex",
             justifyContent: "center"
         }}>
           <ButtonContainer>
             <ButtonStyled htmlType='submit' onClick={() => form.resetFields()}>Crear cuenta</ButtonStyled>
           </ButtonContainer>
           <div style={{marginLeft: 100}}>
              {user && <Alert message="Nuevo trader registrado" showIcon type="success" closable afterClose={() => setUser(false)} />}
           </div>
         </Form.Item>
     </Form>
     </div>
     </div>
   )
 }
 
 export default Register
 
 
 const ButtonContainer = styled.div`
  padding-left: 200px;
 `;
 
 const InputStyled = styled(Input)`
   &:hover {
     border: 2px solid black;
   }
   &:active {
    border: 2px solid black;
  }
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
 
 