 /* eslint-disable */
import React, {useEffect, useState} from 'react'
import styled from '@emotion/styled'
import {
  Form,
  Input,
  Button,
} from 'antd';
import 'antd/dist/antd.css';
import { Link, useNavigate} from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  auth,
  registerWithEmailAndPassword,
  signInWithGoogle,
}from '../service/firebase'


function Register() {

  const [user, loading, error] = useAuthState(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
    
    registerWithEmailAndPassword(name, email, password, country, city, address, phone);
  };


  useEffect(() => {
    if (loading) return;
    if (user) navigate("/dashboard");
    console.log(user)
  }, [user, loading]);

  return (
    <div>
      <h1>Crear cuenta</h1>
      <Form
        name='useForm'
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        size={"large"}
        onFinish={onFinish}
      >
        <Form.Item label="Nombre" name="firstName" value={name} onChange={(e) => setName(e.target.value)}>
          <InputStyled  />
        </Form.Item>
        <Form.Item label="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}>
          <InputStyled />
        </Form.Item>
        <Form.Item label="Contraseña" name="password" value={password} onChange={(e) => setPassword(e.target.value)}>
          <InputStyled />
        </Form.Item>
        <Form.Item label="Pais" name="country" value={country} onChange={(e) => setCountry(e.target.value)}>
          <InputStyled />
        </Form.Item>
        <Form.Item label="Ciudad" name="city" value={city} onChange={(e) => setCity(e.target.value)}>
          <InputStyled />
        </Form.Item>
        <Form.Item label="Direccion" name="address" value={address} onChange={(e) => setAddress(e.target.value)} >
          <InputStyled />
        </Form.Item>
        <Form.Item label="Celular" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)}>
          <InputStyled />
        </Form.Item >
        <Form.Item style={{  
            display: "flex",
            justifyContent: "center"
        }}>
          <ButtonContainer>
            <ButtonStyled htmlType='submit'>Crear cuenta</ButtonStyled>
          </ButtonContainer>
        </Form.Item>
    </Form>
    </div>
  )
}

export default Register


const ButtonContainer = styled.div`
  display: flex;
  margin-left: 1;
  justify-content: space-evenly;
`;

const InputStyled = styled(Input)`
  &:hover {
    border: 1px solid red;
  }
`;

const ButtonStyled = styled(Button)`
  &:hover {
    border: 1px solid red;
    color: red;
  }
`;
