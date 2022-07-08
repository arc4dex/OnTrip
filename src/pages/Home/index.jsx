import Header from "../../components/header";
import HeaderDesktop from "../../components/headerDesktop";
import MainCard from "../../components/MainCard";
import SearchFilter from "../../components/SearchFilter";
import WhyChooseUs from "../../components/whyChooseUs";
import SpecialOffers from "../../components/SpecialOffers";
import ReviewsApp from "../../components/ReviewsApp";
import Footer from "../../components/Footer";

function Home() {
  return(
    <>
      <Header/>
      <HeaderDesktop/>
      <MainCard/>
      <SearchFilter/>
      <WhyChooseUs/>
      <SpecialOffers/>
      <ReviewsApp/>
      <Footer/>
    </>
  ) 
  ;
}

export default Home;
