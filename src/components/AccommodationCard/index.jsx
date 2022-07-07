import { StyledCard, StyledPaper, StyledButton, StyledBox } from "./styles";

import place from "./place.png";

function AccommodationCard() {
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
            backgroundImage: `url(${place})`,
            backgroundRepeat: "no-repeat",
            width: "100%",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <StyledPaper>
            <StyledBox>
              <h4>City</h4>
              <p>Newton Aboot</p>
            </StyledBox>
            <StyledBox>
              <h4>Date</h4>
              <p>18.09 - 21.09</p>
            </StyledBox>
            <StyledBox>
              <h4>Price</h4>
              <p>$50 000</p>
            </StyledBox>
          </StyledPaper>
        </div>
        <h2>St. Louis Sanatorium</h2>
        <p>
          A small but cozy place to stay in Wisconsin. The resort is located on
          the shore of the river of the same name, within walking distance of
          the beach, pier, comic book store and Shevchenko Monument.
        </p>
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
