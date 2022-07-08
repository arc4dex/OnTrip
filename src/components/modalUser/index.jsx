import { UserMenu } from "./styles";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

function ModalUSer({ setModalUser }){

  function modalClose(){
    setModalUser(false)
  }

  return(
    <UserMenu>
      <div className="containerIcons">
        <IconButton>
            <AccountCircleOutlinedIcon fontSize="large" color='primary'/>
          </IconButton>
        <IconButton onClick={modalClose}>
            <CloseIcon fontSize=""/>
        </IconButton>
      </div>
      <div className="containerOptions">
        <h3>Login</h3>
        <h3>Register</h3>
      </div>
    </UserMenu>
  )
}

export default ModalUSer