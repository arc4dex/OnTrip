import { Button, Divider } from "@mui/material";
import CardDashBoard from "../cardDashBoard";
import Footer from "../Footer";
import Header from "../header";
import HeaderDesktop from "../headerDesktop";
import NomadeHeader from "../NomadeHeader";
import { ContainerInfo, MainPaper, MainSection } from "./styles";

function DashBoard() {
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
        <NomadeHeader/>
        <ContainerInfo></ContainerInfo>
        <MainPaper elevation={2}>
          <CardDashBoard />
          <CardDashBoard />
          <CardDashBoard />
        </MainPaper>
      </MainSection>
      <Footer />
    </>
  );
}

export default DashBoard;
