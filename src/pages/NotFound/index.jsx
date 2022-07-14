import { MainContent } from "./style";

import Header from "../../components/header";
import HeaderDesktop from "../../components/headerDesktop";
import Footer from "../../components/Footer";

import img from "../../assets/404-page-not-found.png";

function NotFound() {
  return (
    <>
      <Header />
      <HeaderDesktop />      
      <MainContent src={img} />
      <Footer />
    </>
  );
}

export default NotFound;
