import { Divider } from "@mui/material";
import { ContainerStyle } from "./styles";

function MiniCardImg({ imgMobile = false}) {

  return (
    <ContainerStyle imgMobile= { imgMobile }>
      <div className={ imgMobile ? "" : "desktop" }>
        <section>
          <p>City</p>
          <p className="boldText">Superior</p>
        </section>
        <Divider orientation="vertical" flexItem sx={{
          bgcolor: 'grey',
          borderWidth: '0.1rem',
        }} />
        <section>
          <p>Price</p>
          <p className="boldText">$50.000</p>
        </section>
      </div>
    </ContainerStyle>
  );
}

export default MiniCardImg;
