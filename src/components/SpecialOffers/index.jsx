import AccommodationCard from "../AccommodationCard";

import { StyledSpecialOffers } from "./styles";

function SpecialOffers() {
    return ( 
        <StyledSpecialOffers>
            <h1>Special Offers</h1>
            <div className="cards">
                <AccommodationCard/>
                <AccommodationCard/>
            </div>
        </StyledSpecialOffers>
     );
}

export default SpecialOffers;