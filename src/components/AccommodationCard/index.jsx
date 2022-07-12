import { StyledCard, StyledPaper, StyledButton, StyledBox } from "./styles";

function AccommodationCard({ accom }) {
  function readMore() {
    console.log("Button Read More clicked");
  }

  function booking() {
    console.log("Button Booking clicked");
  }

  return (
    <>
      <StyledCard>
        <div
          className="divImg"
          style={{
            backgroundImage: `url(${accom.imageUrl[0]})`,
            backgroundRepeat: "no-repeat",
            width: "100%",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <StyledPaper>
            <StyledBox>
              <h4>City</h4>
              <p>{accom?.location?.city}</p>
            </StyledBox>
            <StyledBox>
              <h4>Date</h4>
              <p>{accom?.specialOffer?.date}</p>
            </StyledBox>
            <StyledBox>
              <h4>Price</h4>
              <p>{`$ ${
                accom?.specialOffer === true
                  ? accom?.specialOffer.price
                  : accom?.price
              }`}</p>
            </StyledBox>
          </StyledPaper>
        </div>
        <h2>{accom?.name}</h2>
        <p>{accom?.description}</p>
        <div className="btn">
          <StyledButton variant="contained" onClick={() => readMore()}>
            Booking
          </StyledButton>
          <StyledButton variant="outlined" onClick={() => booking()}>
            Read More
          </StyledButton>
        </div>
      </StyledCard>
    </>
  );
}

export default AccommodationCard;
