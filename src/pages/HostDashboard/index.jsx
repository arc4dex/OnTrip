import Footer from "../../components/Footer";
import Header from "../../components/header";
import HeaderDesktop from "../../components/headerDesktop";
import HostHeader from "../../components/HostHeader";

import { Divider } from "@mui/material";

import { useState, useEffect } from "react";
import { Api } from "../../services/api";
import CardDashBoardHost from "../../components/CardDashBoardHost";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function HostDashboard() {
  const [myAccommodations, setMyAccommodations] = useState([]);

  const [user, setUser] = useState({});

  const userIsLoggedReducer = useSelector(({ userState }) => userState);

  const history = useHistory();

  const [lineState, setLineState] = useState(() => {
    if (window.innerWidth < 800) {
      return "none";
    } else {
      return "block";
    }
  });

  useEffect(() => {
    function handleChangeLineState() {
      if (window.innerWidth < 800) {
        setLineState("none");
      } else {
        setLineState("block");
      }
    }

    window.addEventListener("resize", handleChangeLineState);
  }, []);

  useEffect(() => {
    // TODO Deixar esse useEffect rodando tbm quando alterar a lista --> para quando for editar ou deletar acomodação

    const userToken = localStorage.getItem("userToken");

    const userId = localStorage.getItem("userId");

    setUser(JSON.parse(localStorage.getItem("user")));

    Api.get(`users/${userId}/accommodation`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
    })
      .then((response) => {
        setMyAccommodations(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  console.log(myAccommodations);

  return (
    <>
      {userIsLoggedReducer ? (
        <>
          <Header />
          <HeaderDesktop />
          <Divider
            className="btnAdd"
            flexItem
            sx={{
              bgcolor: "#EE685F",
              borderWidth: "1px",
              width: "90%",
              alignSelf: "center",
              display: lineState,
            }}
          />
          <HostHeader user={user} />
          {myAccommodations.length > 0 &&
            myAccommodations.map((element) => {
              return <CardDashBoardHost key={element.id} element={element} />;
            })}
          {/* <TODO>Caso o host não tenha nenhuma acomodação, renderizar que ele nao tem nenhuma, e botão para adicionar centralizado</TODO> */}
          <Footer />
        </>
      ) : (
        history.push("/")
      )}
    </>
  );
}

export default HostDashboard;
