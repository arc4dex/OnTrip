import { Background, UserMenu } from "./styles";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Login from "../login";
import Register from "../Register";
import { useDispatch, useSelector } from "react-redux";
import { changeUseState } from "../../store/modules/userIsLogged/actions";
import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";
import { toast } from "react-toastify";

function ModalUSer({ setModalUser }) {

  const userState = useSelector(({ userState }) => userState);

  const userData = useSelector(({ userData }) => userData);

  const dispatch = useDispatch();

  const [isModalClosed, setIsModalClosed] = useState(false);

  const [loginModal, setLoginModal] = useState(false);

  const [registerModal, setRegisterModal] = useState(false);

  const history = useHistory();

  function modalClose() {
    setIsModalClosed(true);

    setTimeout(() => {
      setModalUser(false);
    }, 1000);
  }

  const handleOpenModalLogin = () => {
    setLoginModal(true);
    
  };

  const handleCloseModalLogin = () => {
    setLoginModal(false);
  };

  const handleOpenRegisterModal = () => {
    setRegisterModal(true);
  };

  const handleCloseRegisterModal = () => {
    setRegisterModal(false);
  };

  const logOff = () => {
    localStorage.clear();
    toast.success("Successful logout!");
    dispatch(changeUseState(false));
    history.push(`/`);
  };

  const toTrips = () => {
    let id = localStorage.getItem("userId");
    history.push(`/nomadeDash/${id}`);
  };

  const toAccommodations = () => {
    const id = localStorage.getItem("userId");
    history.push(`/hostDash/${id}`);
  };

  return (
    <>
      <Background onClick={modalClose} handleCloseUser={isModalClosed} />
      <UserMenu handleCloseUser={isModalClosed}>
        <div className="containerIcons">
          {!userState ? (
            <IconButton>
              <AccountCircleOutlinedIcon fontSize="large" color="primary" />
            </IconButton>
          ) : (
            <img src={userData.profilePicture[0]} alt="Avatar user" />
          )}
          {/* <IconButton>
            <AccountCircleOutlinedIcon fontSize="large" color="primary" />
          </IconButton> */}
          <IconButton onClick={modalClose}>
            <CloseIcon fontSize="" />
          </IconButton>
        </div>
        <div className="containerOptions">
          {!userState ? (
            <>
              <h3 onClick={handleOpenModalLogin}>Login</h3>{" "}
              <h3 onClick={handleOpenRegisterModal}>Register</h3>{" "}
            </>
          ) : (
            <>
              <h3 onClick={toTrips}>My trips</h3>
              <h3 onClick={toAccommodations}>My accommodations</h3>
              <h3 onClick={logOff}>Logout</h3>
            </>
          )}
        </div>
      </UserMenu>
      <Login
        loginModal={loginModal}
        handleCloseModalLogin={handleCloseModalLogin}
        handleOpenRegisterModal={handleOpenRegisterModal}
      />
      <Register
        registerModal={registerModal}
        handleOpenRegisterModal={handleOpenRegisterModal}
        handleCloseRegisterModal={handleCloseRegisterModal}
        handleOpenModalLogin={handleOpenModalLogin}
      />
    </>
  );
}

export default ModalUSer;
