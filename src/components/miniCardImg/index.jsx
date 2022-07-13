import { Divider } from "@mui/material";
import { ContainerStyle } from "./styles";

<<<<<<< HEAD
function MiniCardImg({ imgMobile = false, element}) {

=======
function MiniCardImg({ imgMobile = false, element }) {
>>>>>>> 0aabee97a1774eac1adb6ecf3dff5b621d9a6af8
  return (
    <ContainerStyle imgMobile={imgMobile}>
      <div className={imgMobile ? "" : "desktop"}>
        <section>
          <p>City</p>
<<<<<<< HEAD
          <p className="boldText">{element?.location?.city}</p>
=======
          <p className="boldText">{element?.name}</p>
>>>>>>> 0aabee97a1774eac1adb6ecf3dff5b621d9a6af8
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
<<<<<<< HEAD
          <p className="boldText">${element?.price}</p>
=======
          <p className="boldText">${element?.price.toFixed(2)}</p>
>>>>>>> 0aabee97a1774eac1adb6ecf3dff5b621d9a6af8
        </section>
      </div>
    </ContainerStyle>
  );
}

export default MiniCardImg;
