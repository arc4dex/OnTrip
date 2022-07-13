import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import AccomodationCardPage from "../../components/accommodationCardPage";
import { Api } from "../../services/api";

function Accommodation() {
  const params = useParams();

  const [ accommodation, setAccommodation ] = useState([])
  const [reviewUser, setReviewUser] = useState([]);

  useEffect(() => {
    Api.get(`/accommodation/${params.id}`).then((response) => {
      setAccommodation(response.data);
    });
    Api.get("/accommodationReview").then((response) => {
      setReviewUser(response.data);
    });
  }, []);

  console.log(accommodation)

  const reviewAccommodation = reviewUser?.filter((item) => {
    return item.idAccommodation === parseInt(params.id)
  }) 
  return <AccomodationCardPage accommodation={ accommodation } reviewAccommodation={reviewAccommodation}/>;
}

export default Accommodation;
