import { ContainerIconsNav, ContainerOptionsNav, NavDesktop } from "./styles";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { IconButton } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useState } from "react";
import ModalUSer from "../modalUser";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

function HeaderDesktop() {
  const history = useHistory();
  const userState = useSelector(({ userState }) => userState);
  const userData = useSelector(({ userData }) => userData);

  const [language, setLanguage] = useState(true);
  const [modalUser, setModalUser] = useState(false);

  function homePage() {
    history.push("/");
  }

  function trips() {
    history.push("/trips");
  }

  function aboutUs() {
    history.push("/aboutUs");
  }

  function selectedLanguage() {
    if (language === true) {
      setLanguage(false);
    } else {
      setLanguage(true);
    }
  }

  function modalUserDinamic() {
    if (modalUser === false) {
      setModalUser(true);
    } else {
      setModalUser(false);
    }
  }

  return (
    <NavDesktop>
      <div className="containerLogo">
        <section onClick={homePage}>
          <h1>On</h1>
          <h2>Trip</h2>
        </section>
        <ContainerOptionsNav>
          <h3 onClick={trips}>Trips</h3>
          <h3>Blog</h3>
          <h3 onClick={aboutUs}>About us</h3>
        </ContainerOptionsNav>
      </div>
      <ContainerIconsNav>
        <IconButton>
          <AttachMoneyIcon color="primary" />
        </IconButton>
        {language ? (
          <button className="btnLanguage" onClick={selectedLanguage}>
            EN
          </button>
        ) : (
          <button className="btnLanguage" onClick={selectedLanguage}>
            BR
          </button>
        )}
        {modalUser && <ModalUSer setModalUser={setModalUser} />}

        {userState ? (
          <>
            <img
              src={userData?.profilePicture[0] && userData?.profilePicture[0]}
              alt="Avatar user"
              onClick={modalUserDinamic}
            />
          </>
        ) : (
          <IconButton onClick={modalUserDinamic}>
            <AccountCircleOutlinedIcon color="primary" />
          </IconButton>
        )}

        {/* <IconButton onClick={modalUserDinamic}>
          <AccountCircleOutlinedIcon color="primary" />
        </IconButton> */}
      </ContainerIconsNav>
    </NavDesktop>
  );
}

export default HeaderDesktop;
