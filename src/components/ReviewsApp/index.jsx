import { DivReviews, StyledButton } from "./style";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import CardReviews from "../CardReviews";

import { useState } from "react";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  height: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-evenly",
};

const textFieldStyle = {
  width: 300,
};

function ReviewsApp() {
  // pegar reviews do state do redux
  const reviews = [
    {
      id: 1,
      name: "Jed Watson",
      review:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae odit non id ducimus velit molestias quisquam dolor quo.",
      profession: "Publisher",
    },
    {
      id: 2,
      name: "Sarah Black",
      review:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam sunt corporis consectetur laboriosam totam dolorem eaque mollitia quia! Quae odit non id ducimus velit molestias quisquam dolor quo.",
      profession: "Software Developer",
    },
    {
      id: 3,
      name: "Jack Cruz",
      review:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam sunt corporis consectetur laboriosam totam dolorem eaque mollitia quia! Quae odit non id ducimus velit molestias quisquam dolor quo.",
      profession: "Software Developer",
    },
    {
      id: 4,
      name: "John White",
      review: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      profession: "Software Developer",
    },
    {
      id: 5,
      name: "Peter Smith",
      review:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam sunt corporis consectetur laboriosam totam dolorem eaque mollitia quia! Quae odit non id ducimus velit molestias quisquam dolor quo.",
      profession: "Software Developer",
    },
  ];

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const schema = yup.object().shape({
    review: yup.string().min(20,"Please, type at least 20 characters")
  });
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  
  function onSubmitReview(data) {
    console.log(data);
    handleClose();
  }

  return (
    <DivReviews>
      <h2>Reviews</h2>
      <div className="divReviews-content">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            600: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            720: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {reviews.map((element) => (
            <SwiperSlide key={element.id}>
              <CardReviews element={element} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <StyledButton onClick={handleOpen} variant="contained">
        Add a Review
      </StyledButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField
            id="outlined-multiline-static"
            label="Type your Review"
            multiline
            rows={8}
            sx={textFieldStyle}
            {...register("review")}
          />
          <p style={{color: "#ee685f"}}>{errors.review?.message}</p>
          <StyledButton onClick={handleSubmit(onSubmitReview)} variant="contained">
            Submit Review
          </StyledButton>
        </Box>
      </Modal>
    </DivReviews>
  );
}

export default ReviewsApp;
