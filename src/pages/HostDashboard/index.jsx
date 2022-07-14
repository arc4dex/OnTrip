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
import { SpecialDiv } from "./style";
import { BsStars } from "react-icons/bs";

function HostDashboard() {
  const [myAccommodations, setMyAccommodations] = useState([]);

  const [reload, setReload] = useState(false);

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

  function toAcommodations() {
    history.push(`/registerAccommod/${user.id}`);
  }

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
  }, [reload]);

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
          {myAccommodations.length > 0 ? (
            myAccommodations.map((element) => {
              return (
                <CardDashBoardHost
                  key={element.id}
                  element={element}
                  reload={reload}
                  setReload={setReload}
                />
              );
            })
          ) : (
            <div>
              <SpecialDiv style={{ height: "70vh" }}>
                <h3>
                  You don't have any accommodation registered yet,
                  <span onClick={toAcommodations}>
                    click here <BsStars />
                  </span>{" "}
                  if you want to add
                </h3>
              </SpecialDiv>
            </div>
          )}

          <Footer />
        </>
      ) : (
        history.push("/")
      )}
    </>
  );
}

export default HostDashboard;
