import { BackGround, ModalNav } from "./styles";
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from "@mui/material";
import { useHistory } from "react-router-dom";
import { useState } from "react";

function MenuNav({ setModal }){

  const history = useHistory()

  const [ handleAnimation, setHandleAnimation ] = useState(false)

  function modalClose(){
    setHandleAnimation(true)

    setTimeout(() => {
      setModal(false)
    }, 1000);
  }

  function trips(){
    history.push('/trips')
  }

  function aboutUs(){
    history.push('/aboutUs')
  }

  return(
    <>
      <BackGround onClick={modalClose} handleClose = { handleAnimation }/>
        <ModalNav handleClose = { handleAnimation }>
          <div className="container">
            <div className="container_logo">
              <h1>On</h1>
              <h2>Trip</h2>
            </div>
            <IconButton onClick={modalClose}>
              <CloseIcon/>
            </IconButton>
          </div>
          <div className="menu">
            <h3 onClick={trips}>Trips</h3>
            <h3>Blog</h3>
            <h3 onClick={aboutUs}>About us</h3>
          </div>
        </ModalNav> 
    </>
  )
}

export default MenuNav