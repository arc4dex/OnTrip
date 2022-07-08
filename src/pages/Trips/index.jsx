import { StyledH1 } from "./style";

import Header from "../../components/header";
import HeaderDesktop from "../../components/headerDesktop";
import SearchFilter from "../../components/SearchFilter";
import AccommodationCard from "../../components/AccommodationCard";
import SpecialOffers from "../../components/SpecialOffers";
import Footer from "../../components/Footer";


function Trips() {
  return (
    <>
      <Header/>
      <HeaderDesktop/>
      <StyledH1>Trips</StyledH1>
      <SearchFilter/>
      {/* Aqui será executado um map para exibir a quantidade de cards necesários, talvez criar uma section específica para retornar os cards */}
      <AccommodationCard/>
      <SpecialOffers/>
      <Footer/>
    </>
  );
}

export default Trips;
