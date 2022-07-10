import { IconButton } from "@mui/material"
import { useState } from "react"
import MenuNav from "../menuNav"
import { HeaderNav } from "./styles"
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ModalUSer from "../modalUser";
import { useHistory } from "react-router-dom";

function Header(){

  const history = useHistory()

  const [ modal, setModal ] = useState(false)
  const [ modalUser, setModalUser ] = useState(false)
  const [isLogged, setIsLogged] = useState(true);

  function modalNavDinamic(){
   setModal(true)
  }

  function modalUserDinamic(){
   setModalUser(true)
  }

  function homePage(){
    history.push('/')
  }

  return(
    <HeaderNav>
      <div>
        {modal === true && <MenuNav setModal={setModal}/>}
        <IconButton onClick={modalNavDinamic}>
          <MenuIcon/>
        </IconButton>
        <div className="containerLogo" onClick={homePage}>
          <h1>On</h1>
          <h2>Trip</h2>
        </div>
        </div>
        {modalUser === true && <ModalUSer setModalUser={setModalUser}/> }
        {isLogged ? (
          <>
            <img
              src="https://mundoavatar.com.br/wp-content/uploads/2021/07/avatar-filme.jpeg"
              alt="Avatar user" onClick={modalUserDinamic}
            />
          </>
        ) : (
          <IconButton onClick={modalUserDinamic}>
            <AccountCircleOutlinedIcon color="primary" />
          </IconButton>
        )}
    </HeaderNav>
  )
}

export default Header