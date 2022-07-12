import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import AccomodationCardPage from "../../components/accommodationCardPage";
import { Api } from "../../services/api";

function Accommodation() {

  const params = useParams();

  const [ accommodation, setAccommodation ] = useState([])

  useEffect(() => {
    Api.get(`/accommodation/1`).then((response) => {
      setAccommodation(response.data)
    });
  }, []);

  return <AccomodationCardPage accommodation={ accommodation }/>;
}

export default Accommodation;
