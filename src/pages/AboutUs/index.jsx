import Footer from "../../components/Footer";
import Header from "../../components/header";
import HeaderDesktop from "../../components/headerDesktop";
import {
  ImgCard,
  InfoCard,
  StyledAboutUs,
  StyledCard,
  StyledShowcase,
  StyledText,
} from "./style";
import bruno from "../../imgs/bruno.jfif";
import leticia from "../../imgs/leticia.jfif";
import andre from "../../imgs/andre.jfif";
import pedro from "../../imgs/pedro.jfif";
import david from "../../imgs/david.jfif";
import durval from "../../imgs/durval.jfif";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

function AboutUs() {
  return (
    <>
      <Header />
      <HeaderDesktop />
      <StyledAboutUs>
        <h1>About Us</h1>
        <StyledText>
          <h4>
            We are a team of fullStack developers moved by the same goal, to
            make beautiful and efficient applications
          </h4>
        </StyledText>
        <StyledShowcase>
          <StyledCard>
            <ImgCard>
              <img src={bruno} alt="bruno"></img>
            </ImgCard>
            <InfoCard>
              <h5>Bruno Passos</h5>
              <p>Tech-Lead</p>
              <a href="https://www.linkedin.com/in/bruno-passosbp/">
                <AiFillLinkedin />
              </a>
              <a href="https://github.com/brunopassos">
                <AiFillGithub />
              </a>
            </InfoCard>
          </StyledCard>
          <StyledCard>
            <ImgCard>
              <img src={leticia} alt="leticia"></img>
            </ImgCard>
            <InfoCard>
              <h5>Letícia de Araujo</h5>
              <p>Product Owner</p>
              <a href="https://www.linkedin.com/in/let%C3%ADcia-de-ara%C3%BAjo-nunes-88bb731bb/">
                <AiFillLinkedin />
              </a>
              <a href="https://github.com/leticia-de-araujo">
                <AiFillGithub />
              </a>
            </InfoCard>
          </StyledCard>
          <StyledCard>
            <ImgCard>
              <img src={andre} alt="andre"></img>
            </ImgCard>
            <InfoCard>
              <h5>André Volcov</h5>
              <p>Scrum Master</p>
              <a href="https://www.linkedin.com/in/andr%C3%A9-volcov-6783b8a2/">
                <AiFillLinkedin />
              </a>
              <a href="https://github.com/Andre-Volcov">
                <AiFillGithub />
              </a>
            </InfoCard>
          </StyledCard>
          <StyledCard>
            <ImgCard>
              <img src={pedro} alt="pedro"></img>
            </ImgCard>
            <InfoCard>
              <h5>Pedro Bernardes</h5>
              <p>Quality Assurance</p>
              <a href="https://www.linkedin.com/in/pedro-bernardes-a3500a183/">
                <AiFillLinkedin />
              </a>
              <a href="https://github.com/arc4dex">
                <AiFillGithub />
              </a>
            </InfoCard>
          </StyledCard>
          <StyledCard>
            <ImgCard>
              <img src={david} alt="david"></img>
            </ImgCard>
            <InfoCard>
              <h5>David Bassouto</h5>
              <p>Quality Assurance</p>
              <a href="https://www.linkedin.com/in/david-bassouto-155518142/">
                <AiFillLinkedin />
              </a>
              <a href="https://github.com/DavidBassouto">
                <AiFillGithub />
              </a>
            </InfoCard>
          </StyledCard>
          <StyledCard>
            <ImgCard>
              <img src={durval} alt="durval"></img>
            </ImgCard>
            <InfoCard>
              <h5>Durval Moroz</h5>
              <p>Quality Assurance</p>
              <a href="https://www.linkedin.com/in/durval-moroz-6b7409152/">
                <AiFillLinkedin />
              </a>
              <a href="https://github.com/DurvalMoroz">
                <AiFillGithub />
              </a>
            </InfoCard>
          </StyledCard>
        </StyledShowcase>
      </StyledAboutUs>
      <Footer />
    </>
  );
}

export default AboutUs;
