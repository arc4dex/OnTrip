import { CardPaper } from "./styles"
import LoyaltyOutlinedIcon from '@mui/icons-material/LoyaltyOutlined';
import { Button, IconButton } from "@mui/material";
import { useHistory } from "react-router-dom";

function StartATrip(){

  const history = useHistory()

  function findTrip(){
    history.push('/trips')
  }

  return(
    <CardPaper elevation={3}>
      <section>
      <IconButton className='tag'>
        <LoyaltyOutlinedIcon color='primary' sx={{fontSize: 60,}}/>
      </IconButton>
      <h1>No trips planned...yet</h1>
      <p>Time to dust off your bags and start planning your next adventure</p>
      <Button variant="contained" onClick={findTrip} >Start search</Button>
      </section>
      <div>
        <img src="https://www.cvc.com.br/dicas-de-viagem/wp-content/uploads/2018/08/porto-seguro-em-familia-700597240-1.jpg" alt="" />
      </div>
    </CardPaper>
  )
}

export default StartATrip