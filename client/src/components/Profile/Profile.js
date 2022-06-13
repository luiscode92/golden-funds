import React, { useEffect, useContext, useState } from 'react'
import styled from '@emotion/styled'
import {
  Form,
  Input,
  Button,
  Spin,
  Modal,
} from 'antd';
import 'antd/dist/antd.css';
import {
  query,
  collection,
  onSnapshot,
  where,

} from "firebase/firestore";
import { db, updateData, sendPasswordReset,} from '../../service/firebase'
import { UserContext } from '../../context/UserContext';

export const Profile = () => {
  const {user}= useContext(UserContext)
  const [ profileData, setProfileData ] = useState(null)
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [newPassword, setNewPassword] = useState("")
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() =>{
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        setProfileData(doc.data())
      })
      }
    )
  }, [setProfileData, user])

  const onFinish = (values) => {
    updateData(name,email, user.uid, phone,address)
  };

  return (
    <div style={{
      display:"flex", 
      justifyContent: "center", 
      backgroundColor:"white",
      width:"80%",
      height: "auto",
      position:" absolute",
    }}>
      {profileData ? 
      <ProfileContainer>
        <Form
          name='useForm'
          wrapperCol={{ span: 30 }}
          layout="vertical"
          onFinish={onFinish}
          size="large"
        >
          <Form.Item label="Nombre" name="firstName" value={name} onChange={(e) => setName(e.target.value)}>
            <InputStyled placeholder={profileData.name} />
          </Form.Item>
          <Form.Item label="Email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}>
            <InputStyled placeholder={profileData.email} />
          </Form.Item>
          <Form.Item label="Direccion" name="address" value={address} onChange={(e) => setAddress(e.target.value)}>
            <InputStyled placeholder={profileData.address} />
          </Form.Item>
          <Form.Item label="Celular" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)}>
            <InputStyled placeholder={profileData.phone} />
          </Form.Item >
          <Form.Item style={{  
              display: "flex",
              justifyContent: "center"
          }}>
            <ButtonContainer>
              <ButtonStyled htmlType='submit'>Actualizar</ButtonStyled>
              <ButtonStyled onClick={() => sendPasswordReset(profileData.email)}>Cambiar contraseña</ButtonStyled>
            </ButtonContainer>
          </Form.Item>
        </Form>
      </ProfileContainer>
      : <Spin />}
    </div>
    
  )
}

const ProfileContainer = styled.div`
  margin: 2rem;
  padding: 1rem;
  width: 800px;
  height: auto;
  box-shadow: 1px 1px 5px 4px #D9D9D9;
  background-color: #F8F9FA;
  display: flex;
  justify-content: center;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const InputStyled = styled(Input)`
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
   width: auto;
   margin: 0 25px;
   background-color: black;
   color: white;
   &:hover {
     border: 2px solid black;
     color: black;
   }
   &:focus {
    border: 2px solid black;
    color: black;
   }
 `;
 
//.ant-btn:hover, .ant-btn:focus