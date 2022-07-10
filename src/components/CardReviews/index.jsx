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
        src={element.userPicture && element.userPicture}
        // {...stringAvatar(element?.userName)}
        className="avatar"
        sx={{ width: "3.5rem", height: "3.5rem" }}
      />
      <p>{element?.message}</p>
      <span>
        <b>{element?.userName}</b>
      </span>
    </ReviewDiv>
  );
}

export default CardReviews;
