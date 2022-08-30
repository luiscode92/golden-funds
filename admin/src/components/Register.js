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
    createNewUser,
    firestore,
    collection
 }from '../firebase'
 import { useAuthCreateUserWithEmailAndPassword } from "@react-query-firebase/auth";
 import { useFirestoreCollectionMutation } from "@react-query-firebase/firestore";
 import { useQueryClient } from "react-query";
 import { QueryClient, QueryClientProvider } from "react-query";
 const queryClient = new QueryClient();


 
 
 function Register() {
  const [form] = Form.useForm();
  const [addingNewAccount, setAddingNewAccount] = useState(false)
  const [authEmail, setAuthEmail] = useState("");
  const [password, setPassword] = useState("")
  const [accountEmail, setAccountEmail] = useState("")
  const [isNewUser, setIsNewUser] = useState("verify")
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [accountId, setAccountId] = useState("");
  const [user, setUser] = useState({})
  const [emailTest, setEmailTest] = useState("")


   const createUserMutation = useAuthCreateUserWithEmailAndPassword(auth, {
    onSuccess() {
      setIsNewUser("NEWUSER")
      setAddingNewAccount(true)
    },
    onError(error) {
      switch(error.code) {
        case 'auth/email-already-in-use':
          setIsNewUser("TACCOUNT")

        break;
        default:
          console.log(error.message);
          break;
      }
    },
  });
  console.log(addingNewAccount)
  const ref = collection(firestore, "users");
  const dbMutation = useFirestoreCollectionMutation(ref);

  /*const newTaccountEmail = (email) => {
    let emailSplited = email.split('@')
    const count = 1
    const newAccountEmail = `${emailSplited[0]}` + `+${count}`

    return newAccountEmail
  }*/

  const verifyemail = () => {
    createUserMutation.mutate({
      email: authEmail,
      password: "password",
    })
  }
  useEffect(()=>{
    
  })

  const addNewAccount = () => {

  }

  const createNewTrader = () => {
    console.log("new trader")
    setPassword(Math.random().toString(36).slice(-8));
    const emailSent = false;
    //createNewUser(name, email, password, address, phone, accountId, emailSent).then((data) => setUser(data));
    dbMutation.mutate({
      name: name,
      email: authEmail,
      password: password,
      accountId: accountId,
      emaiSent: emailSent,
    })
    };

   return (
     <div style={{ display: "flex", }}>
       <div style={{width: 500, marginLeft: 30}}>
       <Form
         name='useForm'
         labelCol={{ span: 10,  }}
         wrapperCol={{ span: 20}}
         layout="horizontal"
         onFinish={() => addingNewAccount ? addNewAccount() : createNewTrader()}
         form={form}
       >
         <Form.Item label="Email de autenticacion" name="authEmail" value={authEmail} onChange={(e) => setAuthEmail(e.target.value)} >
           <InputStyled />
         </Form.Item>
          {isNewUser === "NEWUSER" &&
            <div>
              <Form.Item label="Nombre" name="firstName" value={name} onChange={(e) => setName(e.target.value)}  >
                <InputStyled  />
              </Form.Item>
              <Form.Item label="Nueva Cuenta" name="accountId" value={accountId} onChange={(e) => setAccountId(e.target.value)} >
                <InputStyled />
              </Form.Item >
            </div> 
          }
          {isNewUser === "TACCOUNT" && 
            <div>
              <Form.Item label="Trading account" name="accountId" value={accountId} onChange={(e) => setAccountId(e.target.value)} >
                <InputStyled />
              </Form.Item >
            </div>
          }

          <Form.Item>    
           <div style={{display:"flex", width: 700}}>
            <ButtonContainer>
              <ButtonStyled  
                onClick={() => verifyemail()}
              >
                  Verificar Email
              </ButtonStyled>
              <ButtonStyled 
                htmlType='submit'
                onClick={() => form.resetFields()}
              >
                  Crear Cuenta
              </ButtonStyled>
            </ButtonContainer>
            </div>       
          </Form.Item>
     </Form>
     </div>
     </div>
   )
 }
 
 export default Register
 
 
 const ButtonContainer = styled.div`
  padding-left: 110px;
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
    margin-left: 30px;
   border-radius: 10px;
   border: 2px solid black;
   width: 150px;
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
 
 