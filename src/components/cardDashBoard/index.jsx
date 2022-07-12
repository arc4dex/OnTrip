import { Button, Paper, Rating } from "@mui/material";
import { useEffect, useState } from "react";
import { Api } from "../../services/api";
import MiniCardImg from "../miniCardImg";
import ModalDelAcommodation from "../modalDelAcommodation";
import { CardPaper, ContainerButtons, ContainerInfoCard } from "./styles";
import { toast } from "react-toastify";

function CardDashBoard({ element, conditional }) {
  const [reviews, setReviews] = useState();
  const [reviewAverage, setReviewAverage] = useState(5);
  console.log(conditional);

  const [modalDelete, setModalDelete] = useState(false);

  function openModal() {
    setModalDelete(true);
  }

  function closeModal() {
    setModalDelete(false);
    toast.success("Deleted!");
  }

  useEffect(() => {
    Api.get("/accommodationReview")
      .then((response) => setReviews(response.data))
      .catch((err) => console.log(err));
  }, []);

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

  return (
    <CardPaper opacity={conditional} elevation={3}>
      <div className="imgContainer">
        <img src={element.imageUrl[0]} alt="" />
        <MiniCardImg imgMobile />
      </div>
      <ContainerInfoCard>
        <h1>{element.name}</h1>
        <Paper
          elevation={2}
          sx={{
            width: "9rem",
            textAlign: "center",
            alignItems: "center",
            borderRadius: "0.5rem",
          }}
        >
          <Rating name="half-rating" value={reviewAverage} precision={0.5} />
        </Paper>
        <p>{element.description}</p>
        <MiniCardImg element={element} />
      </ContainerInfoCard>
      <ContainerButtons>
        {conditional !== "finished" && (
          <Button variant="contained">Book Again</Button>
        )}

        <Button variant="outlined">Read More</Button>
      </ContainerButtons>
    </CardPaper>
  );
}

export default CardDashBoard;
