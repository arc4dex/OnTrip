import { Avatar } from "@mui/material";
import { ReviewDiv } from "./style";

function CardReviews({ element }) {
  function stringAvatar(name) {
    return {
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }

  return (
    <ReviewDiv>
      <Avatar
        {...stringAvatar(element.name)}
        className="avatar"
        sx={{ width: "3.5rem", height: "3.5rem" }}
      />
      <p>{element.review}</p>
      <span>
        <b>{element.name}</b>, {element.profession}
      </span>
    </ReviewDiv>
  );
}

export default CardReviews;
