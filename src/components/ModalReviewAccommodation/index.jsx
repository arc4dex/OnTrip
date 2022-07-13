import { Modal } from "./style";
import { AiOutlineClose } from "react-icons/ai";
import { StyledButton } from "../ReviewsApp/style";
import { Button, Rating } from "@mui/material";
import { useEffect, useState } from "react";
import { Api } from "../../services/api";
import { toast } from "react-toastify";

export default function ModalReviewAccommodation({
  setReviewAccommodation,
  reviews,
}) {
  const [reviewsUser, setReviewsUser] = useState([]);
  const [value, setValue] = useState(5);

  const id = localStorage.getItem("userId");
  const token = localStorage.getItem("userToken");

  function submit() {
    if (reviewsUser.length > 0) {
      Api.patch(
        `/accommodationReview/${reviews}`,
        {
          review: value,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
        .then(
          (response) => response.data,
          toast.success(`You have updated your review to ${value} stars!`)
        )
        .catch((err) => toast.error("Something went wrong, try again!"));
    } else {
      Api.post(
        `/accommodationReview/${reviews}`,
        {
          review: value,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
        .then(
          (response) => response.data,
          toast.success(`Thank you for evaluating with ${value} stars!`)
        )
        .catch((err) => toast.error("Something went wrong, try again!"));
    }
    setReviewAccommodation(false);
  }

  useEffect(() => {
    Api.get(`/users/${id}/accommodationReview?id=${reviews}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => setReviewsUser(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Modal>
      <div class="modal-content">
        <span>
          <AiOutlineClose onClick={() => setReviewAccommodation(false)} />
        </span>
        <h3>Choose your score</h3>
        <p>
          {reviewsUser && (
            <Rating
              name="half-rating"
              defaultValue={5}
              precision={0.5}
              onChange={(e) => setValue(e.target.value)}
            />
          )}
        </p>
        <Button variant="contained" onClick={submit}>
          Submit
        </Button>
      </div>
    </Modal>
  );
}
