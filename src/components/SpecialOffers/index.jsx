import { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

import AccommodationCard from "../AccommodationCard";

import { StyledSpecialOffers } from "./styles";

import { Api } from "../../services/api";

function SpecialOffers() {
  const [accommodations, setAccommodations] = useState([]);

  useEffect(() => {
    Api.get("/accommodation").then((resp) => setAccommodations(resp.data));
  });

  return (
    <StyledSpecialOffers>
      <h1>Special Offers</h1>
      <div className="cards">
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            600: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {accommodations?.map((accom) => {
            return (
              <SwiperSlide key={accom.id}>
                <AccommodationCard accom={accom} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </StyledSpecialOffers>
  );
}

export default SpecialOffers;
