import { Button, Paper, Rating } from "@mui/material"
import { ContainerMiniCardReview, ContainerRaitingReview } from "./styles"
import ModalReadMore from "../modalReadMore"
import { useState } from "react"

function MiniCardReview({reviewAccommodation}){

  const [ modalReadMore, setModalReadMore ] = useState(false)

  function handleModalReadMoreReview(){
    setModalReadMore(true)
  }

  const commentModal = reviewAccommodation?.comment

  return(
    <>
    {modalReadMore && <ModalReadMore title={'casa'} description={commentModal} setModalReadMore={setModalReadMore}/>}
    { reviewAccommodation?.map((review, index) => {
    return <Paper key={index} sx={{padding: '0.5rem'}}>
    <ContainerMiniCardReview>
      <div>
        <img src={review?.userPicture} alt={review?.userName} />
      </div>
      <ContainerRaitingReview>
          <Rating value={review?.review} precision={0.5} size='small' readOnly/>
      </ContainerRaitingReview>
      <p>{review?.comment?.substring(0, 180)}{review?.comment?.length >= 181 && <Button size="small" onClick={handleModalReadMoreReview}>...more</Button>}</p>
      <h2>{review?.userName}</h2>
    </ContainerMiniCardReview>
    </Paper>
      })
    }
    </>
  )
}

export default MiniCardReview