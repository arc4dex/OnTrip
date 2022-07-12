import { Divider } from "@mui/material";
import { useEffect } from "react";
import { useState } from "react";
import { Api } from "../../services/api";
import CardDashBoard from "../cardDashBoard";
import Footer from "../Footer";
import Header from "../header";
import HeaderDesktop from "../headerDesktop";
import NomadeHeader from "../NomadeHeader";
import { ContainerInfo, MainPaper, MainSection, NoInfo } from "./styles";

function DashBoard() {
  const [filterTrips, setFilterTrips] = useState("booked");
  const [myTrips, setMyTrips] = useState([]);
  const [bookHistory, setBookHistory] = useState([]);
  const [myBookedAccommodations, setMyBookedAccommodations] = useState([]);
  const [conditional, setConditional] = useState("booked");

  const id = localStorage.getItem("userId");
  const token = localStorage.getItem("userToken");

  useEffect(() => {
    Api.get(`/accommodation`)
      .then((resp) => setMyTrips(resp.data))
      // .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    Api.get(`/users/${id}/bookings`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((resp) => setBookHistory(resp.data))
      .catch((err) => err.data);
  }, []);

  useEffect(() => {
    let temporaryArray = [];
    let another = [];
    for (let i = 0; i < bookHistory.length; i++) {
      for (let j = 0; j < myTrips.length; j++) {
        if (bookHistory[i].accommodationId === myTrips[j].id) {
          if (bookHistory[i].status === filterTrips || filterTrips === "all") {
            if (bookHistory[i].status === "booked") {
              let copy = [...myTrips];
              let middle = copy[j];
              another.push("booked");
              temporaryArray.push(middle);
            } else if (bookHistory[i].status === "cancelled") {
              let copy = [...myTrips];
              let middle = copy[j];
              another.push("cancelled");
              temporaryArray.push(middle);
            } else if (bookHistory[i].status === "finished") {
              let copy = [...myTrips];
              let middle = copy[j];
              another.push("finished");
              temporaryArray.push(middle);
            }
          }
        }
      }
      setConditional(another);
      setMyBookedAccommodations(temporaryArray);
    }
  }, [myTrips, filterTrips]);



  return (
    <>
      <MainSection>
        <HeaderDesktop />
        <Header />
        <Divider
          className="btnAdd"
          flexItem
          sx={{
            bgcolor: "#EE685F",
            borderWidth: "1px",
            width: "90%",
            alignSelf: "center",
          }}
        />
        <NomadeHeader
          filterTrips={filterTrips}
          setFilterTrips={setFilterTrips}
        />
        <ContainerInfo></ContainerInfo>
        <MainPaper elevation={2}>
          {myBookedAccommodations.length >= 1 ? (
            myBookedAccommodations.map((element, index) => (
              <CardDashBoard
                element={element}
                key={index}
                conditional={conditional[index]}
              />
            ))
          ) : (
            <NoInfo>
              <h1>
                <i>You don't have any matches with this filter</i>
              </h1>
            </NoInfo>
          )}
        </MainPaper>
      </MainSection>
      <Footer />
    </>
  );
}

export default DashBoard;
