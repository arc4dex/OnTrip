import CardDashBoard from "../../components/cardDashBoard";
import Footer from "../../components/Footer";
import Header from "../../components/header";
import HeaderDesktop from "../../components/headerDesktop";
import HostHeader from "../../components/HostHeader";

import { Divider } from "@mui/material";

import { useState, useEffect } from "react";

function HostDashboard() {
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
      <HostHeader />
      <CardDashBoard />
      <Footer />
    </>
  );
}

export default HostDashboard;
