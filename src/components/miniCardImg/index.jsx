import { Divider } from "@mui/material";
import { ContainerStyle } from "./styles";

function MiniCardImg({ element, imgMobile = false }) {
  return (
    <ContainerStyle imgMobile={imgMobile}>
      <div className={imgMobile ? "" : "desktop"}>
        <section>
          <p>City</p>
          <p className="boldText">{element?.location?.city}</p>
        </section>
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            bgcolor: "grey",
            borderWidth: "0.1rem",
          }}
        />
        <section>
          <p>Price</p>
          <p className="boldText">${element?.price}</p>
        </section>
      </div>
    </ContainerStyle>
  );
}

export default MiniCardImg;
