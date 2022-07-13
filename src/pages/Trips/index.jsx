import { StyledH1 } from "./style";

import { Divider, Pagination } from "@mui/material";

import { useState, useEffect } from "react";

import Header from "../../components/header";
import HeaderDesktop from "../../components/headerDesktop";
import SearchFilter from "../../components/SearchFilter";
import AccommodationCard from "../../components/AccommodationCard";
import SpecialOffers from "../../components/SpecialOffers";
import Footer from "../../components/Footer";
import { Api } from "../../services/api";
import { useSelector } from "react-redux";

function Trips() {
  const userTripsSearchsReducer = useSelector(
    ({ userTripsSearch }) => userTripsSearch
  );
  //state que vai receber os dados do filtro de pesquisa

  const [pages, setPage] = useState(2);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [listAccomodations, setListAccomodations] = useState([]);

  const [lineState, setLineState] = useState(() => {
    if (window.innerWidth < 800) {
      return "none";
    } else {
      return "block";
    }
  });

  function getAccommodAuto(numPage) {
    Api.get(`/accommodation?_page=${numPage}&_limit=10`).then((response) => {
      setListAccomodations(response.data);
      setNumberOfPages(Math.ceil(response.data.length / 5));
    });
  }

  useEffect(() => {
    getAccommodAuto(pages);
  }, [pages]);

  // Api.get(`/accommodation?_page={${page}}&_limit=10`).then(
  //   (response) => {
  //     setListAccomodations(response.data);
  //     setNumberOfPages(Math.ceil(response.data.length / 10));
  //   },
  //   [listAccomodations]);

  function handleChangeLineState() {
    if (window.innerWidth < 800) {
      setLineState("none");
    } else {
      setLineState("block");
    }
  }

  // if (userTripsSearchsReducer?.length === 0) {
  //   Api.get("/accommodation").then((resp) => setSearchedTrips(resp.data));
  // }
  useEffect(() => {
    window.addEventListener("resize", handleChangeLineState);
  }, [pages]);

  const handleChangePage = (event) => {
    const numPag = event.target.textContent;
    setPage(numPag);
  };

  // console.log(userTripsSearchsReducer);

  return (
    <>
      <Header />
      <HeaderDesktop />
      <Divider
        flexItem
        sx={{
          bgcolor: "#EE685F",
          borderWidth: "1px",
          width: "90%",
          alignSelf: "center",
          display: lineState,
        }}
      />
      <StyledH1>Trips</StyledH1>
      <SearchFilter />
      <Pagination
        count={numberOfPages}
        color="primary"
        onClick={handleChangePage}
      />

      {userTripsSearchsReducer?.length > 0
        ? userTripsSearchsReducer.map((accommodation) => (
            <AccommodationCard key={accommodation.id} accom={accommodation} />
          ))
        : listAccomodations.map((accommodation) => (
            <AccommodationCard key={accommodation.id} accom={accommodation} />
          ))}

      {/* {searchedTrips.length === 0 ? (
        listAccomodations.map((item) => {
         return <AccommodationCard key={item.id} accom={item} />;
        })
      ) : (
        searchedTrips.map((item) => {
          <AccommodationCard key={item.id} accomodation={item} />;
        })
      )} */}

      <Pagination
        count={numberOfPages}
        color="primary"
        onChange={handleChangePage}
      />
      <SpecialOffers />
      <Footer />
    </>
  );
}

export default Trips;
