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
  element,
}) {
  const [reviewsUser, setReviewsUser] = useState([]);
  const [value, setValue] = useState(5);
  const [userComment, setUserComment] = useState("");
  const [reload, setReload] = useState(true);

  const token = localStorage.getItem("userToken");
  const userInfo = JSON.parse(localStorage.getItem("user"));
  const userId = userInfo.id;
  const userName = userInfo.name;
  const userPicture = userInfo.profilePicture[0];

  function submit() {
    const sendData = {
      userId: userId,
      userName: userName,
      userPicture: userPicture,
      review: Number(value),
      comment: userComment,
      idAccommodation: element,
    };
    console.log(sendData);
    if (reviewsUser.length > 0) {
      const reviewId = reviewsUser[0].id;

      Api.patch(`/accommodationReview/${reviewId}`, sendData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(
          (response) => response.data,
          toast.success(`You have updated your review to ${value} stars!`),
          setReload(!reload)
        )
        .catch((err) => toast.error("Something went wrong, try again!"));
    } else {
      Api.post(`/accommodationReview`, sendData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then(
          (response) => response.data,
          toast.success(`Thank you for evaluating with ${value} stars!`),
          setReload(!reload)
        )
        .catch((err) => toast.error("Something went wrong, try again!"));
    }
    setReviewAccommodation(false);
  }

  useEffect(() => {
    Api.get(`/users/${userId}/accommodationReview?id=${element}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => setReviewsUser(response.data))
      .catch((err) => console.log(err));
  }, [reload]);

  return (
    <Modal>
      <div>
        <p>
          <AiOutlineClose onClick={() => setReviewAccommodation(false)} />
        </p>
        <h3>Choose your score</h3>
        {reviewsUser && (
          <section>
            <Rating
              name="half-rating"
              defaultValue={5}
              precision={0.5}
              onChange={(e) => setValue(e.target.value)}
            />

            <textarea
              value={userComment}
              onChange={(e) => setUserComment(e.target.value)}
            />
          </section>
        )}
        <Button variant="contained" onClick={submit}>
          Submit
        </Button>
      </div>
    </Modal>
  );
}
