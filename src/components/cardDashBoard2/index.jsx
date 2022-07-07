import { StyledCard } from "./styles";

import place from "./place.png";

import { StyledButton } from "./styles";

function DashBoardCard2() {

  function readMore(){
    console.log("Button Read More clicked");
  }

  function booking(){
    console.log("Button Booking clicked");
  }

  return (
    <>
      <StyledCard>
        <img src={place} alt="" />
        <h2>St. Louis Sanatorium</h2>
        <p>
          A small but cozy place to stay in Wisconsin. The resort is located on
          the shore of the river of the same name, within walking distance of the
          beach, pier, comic book store and Shevchenko Monument.
        </p>
        <div>
          <StyledButton variant="contained" onClick={()=> readMore()}>Booking</StyledButton>
          <StyledButton variant="outlined" onClick={()=> booking()}>Read More</StyledButton>
        </div>
      </StyledCard>
    </>
  );
}

export default DashBoardCard2;
