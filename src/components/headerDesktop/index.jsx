import { ContainerIconsNav, ContainerOptionsNav, NavDesktop } from "./styles"
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { IconButton } from "@mui/material";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { useState } from "react";
import ModalUSer from "../modalUser";

function HeaderDesktop(){

  const [ language, setLanguage ] = useState(true)
  const [ modalUser, setModalUser ] = useState(false)

  function homePage(){

  }

  function selectedLanguage(){
    if(language === true){
      setLanguage(false)
    } else{
      setLanguage(true)
    }
  }

  function modalUserDinamic(){
    if(modalUser === false){
      setModalUser(true)
    }else{
      setModalUser(false)
    }
  }

  return(
    <NavDesktop>
      <div className="containerLogo" onClick={homePage}>
        <h1>On</h1>
        <h2>Trip</h2>
      <ContainerOptionsNav>
        <h3>Trips</h3>
        <h3>Blog</h3>
        <h3>About us</h3>
      </ContainerOptionsNav>
      </div>
      <ContainerIconsNav>
        <IconButton>
          <AttachMoneyIcon color='primary'/>
        </IconButton>
        {language ? <button onClick={selectedLanguage}>EN</button> : <button onClick={selectedLanguage}>BR</button>}
        {modalUser && <ModalUSer setModalUser={setModalUser}/>}
        <IconButton onClick={modalUserDinamic}>
          <AccountCircleOutlinedIcon color='primary'/>
        </IconButton>
      </ContainerIconsNav>
    </NavDesktop>
  )
}

export default HeaderDesktop