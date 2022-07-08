import { ModalNav } from "./styles";
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from "@mui/material";
import { useState } from "react";

function MenuNav({setModal}){

  const [ animation, setAnimation ] = useState(false)

  function modalClose(){
    setModal(false)
    setAnimation(true)
  }

  return(
        <ModalNav>
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
            <h3>Trips</h3>
            <h3>Blog</h3>
            <h3>About us</h3>
          </div>
        </ModalNav>
  )
}

export default MenuNav