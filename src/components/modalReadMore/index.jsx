import { IconButton } from "@mui/material";
import { BackGroundModalReadMore, ContainerReadMore } from "./styles";
import CloseIcon from "@mui/icons-material/Close";

function ModalReadMore({ title, description, setModalReadMore }) {
  
  function modalClose() {
    setModalReadMore(false);
  }

  return (
    <BackGroundModalReadMore>
      <ContainerReadMore>
        <section>
          <h1>{title}</h1>
          <IconButton onClick={modalClose}>
            <CloseIcon />
          </IconButton>
        </section>
        <p>{description}</p>
      </ContainerReadMore>
    </BackGroundModalReadMore>
  );
}

export default ModalReadMore;
