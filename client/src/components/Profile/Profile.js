import React from 'react'
import styled from '@emotion/styled'
import {
  Form,
  Input,
  Button,
} from 'antd';
import 'antd/dist/antd.css';
import firebase from '../../service/firebase'

export const Profile = () => {
  console.log(firebase)

  const onFinish = (values) => {
    //console.log('Received values of form: ', values);
    const usersRef = firebase.database().ref('users')
    usersRef.push(values)
  };

  return (
    <ProfileContainer>
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
    </ProfileContainer>
  )
}

const ProfileContainer = styled.div`

  margin: 2rem;
  padding: 1rem;
  width: auto;
  height: 800px;
  box-shadow: 1px 1px 5px 4px #D9D9D9;
  display flex

`;

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
