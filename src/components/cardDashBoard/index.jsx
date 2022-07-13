import { Button, Paper, Rating } from "@mui/material";
import { useEffect, useState } from "react";
import { Api } from "../../services/api";
import MiniCardImg from "../miniCardImg";
import { CardPaper, ContainerButtons, ContainerInfoCard } from "./styles";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import ModalBooking from "../modalBooking";
import ModalReviewAccommodation from "../ModalReviewAccommodation";

function CardDashBoard({ element, conditional }) {
  const [reviews, setReviews] = useState();
  const [reviewAverage, setReviewAverage] = useState(5);
  const [modal, setModal] = useState(false);
  const [reviewAccommodation, setReviewAccommodation] = useState(false);

  const history = useHistory();

  // const [modalDelete, setModalDelete] = useState(false);(VAI EXISTIR NO CARD DO HOST)
  //<ModalDelAcommodation modalDelete={modalDelete} OpenModal={OpenModal} closeModal={closeModal}/>

  // function openModal() {
  //   setModalDelete(true);
  // }

  // function closeModal() {
  //   setModalDelete(false);
  //   toast.success("Deleted!");
  // }
  useEffect(() => {
    Api.get("/accommodationReview")
      .then((response) => setReviews(response.data))
      .catch((err) => console.log(err));
  }, []);

  function readMore() {
    history.push(`/accommodation/${element.id}`);
  }

  function bookingModal() {
    setModal(true);
  }

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
    <>
      <CardPaper opacity={conditional} elevation={3}>
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
            <Rating name="half-rating" value={reviewAverage} precision={0.5} />
          </Paper>
          <p>{element?.description}</p>
          <MiniCardImg element={element} />
        </ContainerInfoCard>
        <ContainerButtons>
          {conditional !== "finished" ? (
            <Button variant="contained" onClick={bookingModal}>
              Book Again
            </Button>
          ) : (
            <Button
              variant="contained"
              onClick={() => setReviewAccommodation(true)}
            >
              Add Review
            </Button>
          )}

          <Button variant="outlined" onClick={readMore}>
            Read More
          </Button>
        </ContainerButtons>
      </CardPaper>
      {modal && <ModalBooking setModal={setModal} price={element.price} />}
      {reviewAccommodation && (
        <ModalReviewAccommodation
          reviews={reviews && reviews[0].idAccommodation}
          setReviewAccommodation={setReviewAccommodation}
        />
      )}
    </>
  );
}

export default CardDashBoard;
