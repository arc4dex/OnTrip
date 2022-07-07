/* eslint-disable react/jsx-no-target-blank */
import { useHistory } from "react-router-dom";

import { StyledButton, StyledFooter } from "./style";

import Logo from "../../imgs/logo.png";

function Footer() {
  const history = useHistory();

  function goToAboutUs() {
    history.push("/aboutUs");
  }

  return (
    <StyledFooter>
      <div>
        <img src={Logo} alt="Logo" />
        <StyledButton variant="text" onClick={goToAboutUs}>
          About us
        </StyledButton>
        <p>
          Based on a design by{" "}
          <a href="https://delvig.me/" target="_blank">
            Delvig
          </a>
        </p>
      </div>
    </StyledFooter>
  );
}

export default Footer;
