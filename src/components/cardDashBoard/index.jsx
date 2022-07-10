import { Button, Paper, Rating } from "@mui/material"
import MiniCardImg from "../miniCardImg"
import { CardPaper, ContainerButtons, ContainerInfoCard } from "./styles"


function CardDashBoard(){

  return(
    <CardPaper elevation={3}>
      <div className="imgContainer">
        <img src="https://content.r9cdn.net/himg/cf/89/96/expediav2-15033-ed0280-550033.jpg" alt="" />
        <MiniCardImg imgMobile/>
      </div>
      <ContainerInfoCard>
        <h1>St. Louis Sanatorium</h1>
        <Paper elevation={2} sx={{ width: '9rem', textAlign:'center', alignItems: 'center', borderRadius: '8px'}}>
          <Rating name="half-rating" defaultValue={4.5} precision={0.5} />
        </Paper>
        <p>
        orem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lacus nunc, aliquet volutpat arcu vitae, auctor consectetur ex. Nunc cursus mollis consequat. Morbi consectetur molestie sapien at dictum. Aliquam hendrerit tellus a purus semper, et vestibulum nisi rhoncus. Curabitur vitae nunc justo. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        </p>
        <MiniCardImg/>
      </ContainerInfoCard>
      <ContainerButtons>
        <Button variant="contained">Edit Accommodation</Button>
        <Button variant="outlined">Delete Accommodation</Button>
      </ContainerButtons>
    </CardPaper>
  )
}

export default CardDashBoard