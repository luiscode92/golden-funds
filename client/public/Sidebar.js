import React from 'react'
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
import { Layout } from 'antd';
import { css } from "@emotion/react";

const {  Sider } = Layout;

function Sidebar() {

  const logOut = () => {
    console.log("logout")
    logout()
  }
  
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
      css={css`
      .ant-layout-sider-zero-width-trigger {
        background: red !important;
      }
    `}
    >
    <SideBarContainer>
      <div >
        <div>
         
        </div>
        <div style={{
          backgroundColor:"red", 
          borderRadius:"50px",
          color:"white"}}>
          <SidebarSection
            title="Nueva Cuenta"
            icon={<AddIcon />}
            linkTo="/"
          />
        </div>


        <SidebarSection
          title="Dashboard"
          icon={<DashboardIcon />}
          linkTo="/"
         />
        <SidebarSection
          title="Cuentas"
          icon={<AccountBalanceWalletIcon/>}
          linkTo="/accounts"
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
          title="Descargas"
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