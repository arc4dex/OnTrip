import { Button, Paper, Rating } from "@mui/material";
import { useEffect, useState } from "react";
import { Api } from "../../services/api";
import MiniCardImg from "../miniCardImg";
import ModalDelAcommodation from "../modalDelAcommodation";
import { CardPaper, ContainerButtons, ContainerInfoCard } from "./style.js";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

function CardDashBoardHost({ element, reload, setReload }) {
  const [reviews, setReviews] = useState();

  const [reviewAverage, setReviewAverage] = useState(5);

  const history = useHistory();

  const [modalDelete, setModalDelete] = useState(false);

  function openModalDelete() {
    setModalDelete(true);
  }

  function closeModalDelete() {
    setModalDelete(false);
  }

  useEffect(() => {
    Api.get("/accommodationReview")
      .then((response) => setReviews(response.data))
      .catch((err) => console.log(err));
  }, [reload]);

  useEffect(() => {
    let temporaryArray = 0;
    let counter = 0;
    if (element && reviews) {
      for (let i = 0; i < reviews.length; i++) {
        if (reviews[i].idAccommodation === element.id) {
          temporaryArray += reviews[i].review;
          counter++;
        }
      }
    }
    let average = temporaryArray / counter;
    setReviewAverage(average);
  }, [reviews, element]);

  function goToEditAccommod(idImage) {
    const idUser = localStorage.getItem("userId");

    history.push(`/editAccommod/${idUser}/${idImage}`);
  }

  return (
    <>
      <CardPaper elevation={3}>
        <div className="imgContainer">
          <img src={element?.imageUrl[0]} alt="" />
          <MiniCardImg imgMobile />
        </div>
        <ContainerInfoCard>
          <h1>{element?.name}</h1>
          <Paper
            elevation={2}
            sx={{
              width: "9rem",
              textAlign: "center",
              alignItems: "center",
              borderRadius: "0.5rem",
            }}
          >
            <Rating
              name="half-rating"
              value={reviewAverage}
              precision={0.5}
              readOnly
            />
          </Paper>
          <p>{element?.description}</p>
          <MiniCardImg element={element} />
        </ContainerInfoCard>
        <ContainerButtons>
          <Button
            variant="contained"
            onClick={() => goToEditAccommod(element?.id)}
          >
            Edit Accommodation
          </Button>

          <Button variant="outlined" onClick={openModalDelete}>
            Delete Accommodation
          </Button>
        </ContainerButtons>
      </CardPaper>
      <ModalDelAcommodation
        modalDelete={modalDelete}
        closeModal={closeModalDelete}
        idAccommodation={element?.id}
        reload={reload}
        setReload={setReload}
      />
    </>
  );
}

export default CardDashBoardHost;
