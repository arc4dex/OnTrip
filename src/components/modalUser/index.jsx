import { Background, UserMenu } from "./styles";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
import { useHistory } from "react-router-dom";

function ModalUSer({ setModalUser }){

  const [ isLogged, setIsLogged ] = useState(false)

  const history = useHistory()

  const [ isModalClosed, setIsModalClosed ] = useState(false)

  function modalClose(){
    setIsModalClosed(true)
   
    setTimeout(() => {
      setModalUser(false)
    }, 1000);
  }

  function login(){
    history.push('/login')
  }

  function register(){
    history.push('/registerAccommod/:id')
  }

  return(
    <>
      <Background onClick={modalClose} handleCloseUser = { isModalClosed }/>
      <UserMenu handleCloseUser = { isModalClosed }>
        <div className="containerIcons">
          <IconButton>
              <AccountCircleOutlinedIcon fontSize="large" color='primary'/>
            </IconButton>
          <IconButton onClick={modalClose}>
              <CloseIcon fontSize=""/>
          </IconButton>
        </div>
        <div className="containerOptions">
          {!isLogged ? <><h3>Login</h3> <h3 onClick={register}>Register</h3> </> :
          <h3>Logout</h3>}
        </div>
      </UserMenu>
    </>
  )
}

export default ModalUSer