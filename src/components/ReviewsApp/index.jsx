import { DivReviews, StyledButton } from "./style";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import CardReviews from "../CardReviews";

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
      <StyledButton variant="contained">Add a Review</StyledButton>
    </DivReviews>
  );
}

export default ReviewsApp;
