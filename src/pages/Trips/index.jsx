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

function Trips() {
  //state que vai receber os dados do filtro de pesquisa
  const [searchedTrips, setSearchedTrips] = useState([]);
  const [page, setPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [listAccomodations, setListAccomodations] = useState([]);

  const [lineState, setLineState] = useState(() => {
    if (window.innerWidth < 800) {
      return "none";
    } else {
      return "block";
    }
  });

  useEffect(() => {
    Api.get(`/accommodation?_page={${page}}&_limit=10`).then(
      (response) => {
        setListAccomodations(response.data);
        setNumberOfPages(Math.ceil(response.data.length / 10));
      },
      [listAccomodations]
    );

    function handleChangeLineState() {
      if (window.innerWidth < 800) {
        setLineState("none");
      } else {
        setLineState("block");
      }
    }

    window.addEventListener("resize", handleChangeLineState);
  }, [page]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

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
        onChange={handleChangePage}
      />

      {searchedTrips.length === 0
        ? listAccomodations.map((item) => {
            return <AccommodationCard key={item.id} accom={item} />;
          })
        : searchedTrips.map((item) => {
            <AccommodationCard key={item.id} accomodation={item} />;
          })}

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
