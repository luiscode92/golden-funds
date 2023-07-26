import React, {useState, useContext, useEffect} from 'react'
import styled from "@emotion/styled";
import SidebarSection from './SidebarSection'
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PersonIcon from '@mui/icons-material/Person';
import PeopleIcon from '@mui/icons-material/People';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import AddIcon from '@mui/icons-material/Add';
import { auth, logout } from '../../service/firebase';
import { Divider, Layout } from 'antd';
import { css } from "@emotion/react";
import logo from '../../assets/logoBlack.png'
import { UserContext } from '../../context/UserContext';

import {
  query,
  collection,
  onSnapshot,
  where,
} from "firebase/firestore";
import { db } from '../../service/firebase'

const {  Sider, Header } = Layout;

function Sidebar() {
  const {user}= useContext(UserContext)
  const [ profileData, setProfileData ] = useState(null)

  useEffect(() =>{
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        setProfileData(doc.data())
      })
      }
    )
  }, [setProfileData, user])

  return (
    <div>
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
      
          }}
          onCollapse={(collapsed, type) => {

          }}
          css={css`
          .ant-layout-sider-zero-width-trigger {
            background: red !important;
          }
        `}
        >
          <SideBarContainer>
            <div>
              <div>
              <img src={logo} alt="logo" style={{width: "100%", maxWidth: "300px", height: "auto"}} /> 
              </div>
        
                <SidebarSection
                  title="Nueva Cuenta"
                  icon={<AddIcon />}
                  linkTo="/"
                  onClick={() => window.open('https://goldenfunds.co/retos', '_blank')}
                />
      
              <SidebarSection
                title="Dashboard"
                icon={<DashboardIcon />}
                linkTo="/"
              />
              <SidebarSection
                title="Mi Perfil"
                icon={<PersonIcon />}
                linkTo="/profile"
              />
              <SidebarSection
                title="Contacto"
                icon={<PeopleIcon />}
                linkTo="/contact"
              />
              <SidebarSection
                title="Plataformas"
                icon={<CloudDownloadIcon/>}
                linkTo="/downloads"
              />
              <SidebarSection
                title="Cerrar Sesion"
                icon={<PowerSettingsNewIcon />}
                linkTo="/"
                onClick={() => logout()}
              />
            </div>
          </SideBarContainer>
        </Sider>
        <Layout>
          <Header style={{
            backgroundColor:"white",
            width:"100%", 
            height: 100, 
            position:"absolute",
            padding: 30,
            }}>
            {profileData && 
              <div style={{
                fontWeight: 400,
                fontSize: 30 
              }}>
                Bienvenido a Golden Funds &nbsp;
                <span style={{
                  fontWeight: 600,
                  fontSize: 30 
                }}
                >{profileData.name}!</span>
              </div> 
            }
            <Divider />
          </Header>
        </Layout>
      </Layout>
    </div>

  )
}

export default Sidebar

const SideBarContainer = styled.div`
    display: flex;
    padding: 20px;
    flex-direction: column;
    border-right: 1px solid #d4d4d4;
    background-color: white;
    color: black;
    height: 100%;
    @media (min-width: 750px) {
      top: 0px;
      height: 100vh;
    }
    @media (max-width: 900px) {
      font-size: 1.5rem;
      padding-bottom: 50px;
      max-height: 60vh;
      display: hidden
      height: 100%;
    }
`;

const Headerr = styled(Header)`
.ant-layout-header{
  padding: 19px 30px
}
`