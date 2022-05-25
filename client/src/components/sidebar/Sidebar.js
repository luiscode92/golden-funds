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

function Sidebar() {

  const logOut = () => {
    console.log("logout")
    logout()
  }
  
  return (
    <SideBarContainer>
      <div style={{ flex: "1 0 auto"}}>
        <div>
          <img src="./logo.png" alt="logo" width={250} height={250}/>
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
          title="Downloads"
          icon={<CloudDownloadIcon/>}
          linkTo="/downloads"
         />
         </div>
        <SidebarSection
          title="Cerrar Sesion"
          icon={<PowerSettingsNewIcon />}
          linkTo="/"
          onClick={() => logout()}
        />
         
    </SideBarContainer>
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
    width: 30%;
    height: 60vh;
    @media (min-width: 750px) {
      width: 300px;
      top: 0px;
      height: 100vh;
    }
    @media (max-width: 750px) {
      font-size: 1.5rem;
      padding-bottom: 50px;
      max-height: 60vh;
    }
`;

const Footer = styled.div`
  flex-shrink: 0;
`;