import AccommodationCard from "../AccommodationCard";

import { StyledSpecialOffers } from "./styles";

import { Api } from "../../services/api";

import { useState, useEffect } from "react";

function SpecialOffers() {
  const [accommodations, setAccommodations]  = useState([]);

  useEffect(() => {
    Api.get("/accommodation").then((resp) => setAccommodations(resp.data));
  });

  return (
    <StyledSpecialOffers>
      <h1>Special Offers</h1>
      <div className="cards">
        {accommodations?.map((accom) => {
          return <AccommodationCard key={accom.id} accom={accom} />;
        })}
      </div>
    </StyledSpecialOffers>
  );
}

export default SpecialOffers;
