import { Rating, Typography } from "@mui/material";

export default function ModalReview() {
  return (
    <div>
      <Typography component="legend">No rating given</Typography>
      <Rating name="no-value" value={null} />
    </div>
  );
}
