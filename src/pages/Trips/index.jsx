import { StyledH1 } from "./style";

import { Divider } from "@mui/material";

import { useState, useEffect } from "react";

import Header from "../../components/header";
import HeaderDesktop from "../../components/headerDesktop";
import SearchFilter from "../../components/SearchFilter";
import AccommodationCard from "../../components/AccommodationCard";
import SpecialOffers from "../../components/SpecialOffers";
import Footer from "../../components/Footer";

function Trips() {

  const [lineState, setLineState] = useState(()=>{
    if(window.innerWidth < 800){
      return "none"
    }else{
      return "block"
    } 
  });

  useEffect(() => {
    function handleChangeLineState() {
      if(window.innerWidth < 800){
        setLineState("none")
      }else{
        setLineState("block")
      }      
    }

    window.addEventListener("resize", handleChangeLineState);
  });

  return (
    <>
      <Header />
      <HeaderDesktop />
      <Divider
        flexItem
        sx={{
          bgcolor: "#EE685F",
          borderWidth: "1px",
          width: "90%",
          alignSelf: "center",
          display: lineState,
        }}
      />
      <StyledH1>Trips</StyledH1>
      <SearchFilter />
      {/* Aqui será executado um map para exibir a quantidade de cards necesários, talvez criar uma section específica para retornar os cards */}
      <AccommodationCard />
      <SpecialOffers />
      <Footer />
    </>
  );
}

export default Trips;
