import { Button, Paper, Rating } from "@mui/material"
import { ContainerMiniCardReview, ContainerRaitingReview } from "./styles"
import Pedro from '../../imgs/pedro.jfif'
import ModalReadMore from "../modalReadMore"
import { useState } from "react"

function MiniCardReview(){

  const [ modalReadMore, setModalReadMore ] = useState(false)

  function handleModalReadMoreReview(){
    setModalReadMore(true)
  }

  const review = 'Quando a realidade supera a expectativa. Equipe super prestativa, casa muito bem desenhada com casa detalhe pensado para o máximo de conforto para duas pessoas. Uma experiência única.'

  return(
    <>
    {modalReadMore && <ModalReadMore title={'casa'} description={review} setModalReadMore={setModalReadMore}/>}
    <Paper sx={{padding: '0.5rem'}}>
    <ContainerMiniCardReview>
      <div>
        <img src={Pedro} alt="" />
      </div>
      <ContainerRaitingReview>
          <Rating name="half-rating" defaultValue={3} precision={0.5} size='small' />
      </ContainerRaitingReview>
      <p>{review.substring(0, 180)}{review.length >= 181 && <Button size="small" onClick={handleModalReadMoreReview}>...more</Button>}</p>
      <h2>Jannike Borg</h2>
    </ContainerMiniCardReview>
    </Paper>
    </>
  )
}

export default MiniCardReview