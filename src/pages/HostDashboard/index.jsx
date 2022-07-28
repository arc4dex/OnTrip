import Footer from "../../components/Footer";
import Header from "../../components/header";
import HeaderDesktop from "../../components/headerDesktop";
import HostHeader from "../../components/HostHeader";

import { Button, Divider, IconButton } from "@mui/material";
import LoyaltyOutlinedIcon from "@mui/icons-material/LoyaltyOutlined";

import { useState, useEffect } from "react";
import { Api } from "../../services/api";
import CardDashBoardHost from "../../components/CardDashBoardHost";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { AppDashHost, StyledPaper } from "./style";

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

  function toRegisterAcommodations() {
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
    <AppDashHost>
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
            <StyledPaper elevation={3}>
              <section>
                <IconButton className="tag">
                  <LoyaltyOutlinedIcon color="primary" sx={{ fontSize: 60 }} />
                </IconButton>
                <h1>You don't have any accommodations registered.</h1>

                <Button
                  variant="contained"
                  sx={{ textTransform: "capitalize" }}
                  onClick={toRegisterAcommodations}
                >
                  Add accommodation
                </Button>
              </section>

              <img
                src="https://www.cvc.com.br/dicas-de-viagem/wp-content/uploads/2018/08/porto-seguro-em-familia-700597240-1.jpg"
                alt=""
              />
            </StyledPaper>
          )}

          <Footer />
        </>
      ) : (
        history.push("/")
      )}
    </AppDashHost>
  );
}

export default HostDashboard;
