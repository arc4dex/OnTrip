import { IconButton } from "@mui/material"
import { useState } from "react"
import MenuNav from "../menuNav"
import { HeaderNav } from "./styles"
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ModalUSer from "../modalUser";
function Header(){

  const [ modal, setModal ] = useState(false)
  const [ modalUser, setModalUser ] = useState(false)

  function modalNavDinamic(){
    if(modal === false){
      setModal(true)
      setModalUser(false)
    } else{
      setModal(false)
    }
  }

  function modalUserDinamic(){
    if(modalUser === false){
      setModalUser(true)
      setModal(false)
    }else{
      setModalUser(false)
    }
  }

  return(
    <HeaderNav>
      <div>
        {modal === true && <MenuNav setModal = {setModal}/>}
        <IconButton onClick={modalNavDinamic}>
          <MenuIcon/>
        </IconButton>
        <div>
          <h1>On</h1>
          <h2>Trip</h2>
        </div>
        </div>
        {modalUser === true && <ModalUSer setModalUser={setModalUser}/> }
        <IconButton onClick={modalUserDinamic}>
          <AccountCircleOutlinedIcon color='primary'/>
        </IconButton>
    </HeaderNav>
  )
}

export default Header