import React from 'react'
import styled from '@emotion/styled'
import {
  Form,
  Input,
  Button,
} from 'antd';
import 'antd/dist/antd.css';
import firebase from '../service/firebase'


function Register() {

  const onFinish = (values) => {
    //console.log('Received values of form: ', values);
    const usersRef = firebase.database().ref('users')
    usersRef.push(values)
  };

  return (
    <div>
       <Form
        name='useForm'
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        size={"large"}
        onFinish={onFinish}
      >
        <Form.Item label="Nombres" name="firstName">
          <InputStyled  />
        </Form.Item>
        <Form.Item label="Apellidos" name="lastName">
          <InputStyled />
        </Form.Item>
        <Form.Item label="Email" name="email">
          <InputStyled />
        </Form.Item>
        <Form.Item label="Pais" name="country">
          <InputStyled />
        </Form.Item>
        <Form.Item label="Ciudad" name="city">
          <InputStyled />
        </Form.Item>
        <Form.Item label="Direccion" name="address">
          <InputStyled />
        </Form.Item>
        <Form.Item label="Celular" name="phone">
          <InputStyled />
        </Form.Item >
        <Form.Item style={{  
            display: "flex",
            justifyContent: "center"
        }}>
          <ButtonContainer>
            <ButtonStyled htmlType='submit'>Actualizar Informacion</ButtonStyled>
            <ButtonStyled>Cambiar contraseña</ButtonStyled>
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
