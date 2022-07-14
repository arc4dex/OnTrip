import { ContainerSearch, MainSection, StyledH1 } from "./style";

import { Divider, Pagination } from "@mui/material";

import { useState, useEffect } from "react";
import { toast } from "react-toastify";

import Header from "../../components/header";
import HeaderDesktop from "../../components/headerDesktop";
import SearchFilter from "../../components/SearchFilter";
import AccommodationCard from "../../components/AccommodationCard";
import SpecialOffers from "../../components/SpecialOffers";
import Footer from "../../components/Footer";
import { Api } from "../../services/api";
import { useSelector } from "react-redux";
import { StyledButton } from "../../components/SearchFilter/style";

function Trips() {
  const userTripsSearchsReducer = useSelector(
    ({ userTripsSearch }) => userTripsSearch
  );
  //state que vai receber os dados do filtro de pesquisa

  const [pages, setPage] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [listAccomodations, setListAccomodations] = useState([]);
  const [reviewUser, setReviewUser] = useState([]);

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
    Api.get("/accommodationReview").then((response) => {
      setReviewUser(response.data);
    });
  }, []);

  const reviewAccommodation = reviewUser.filter((item) => {
    for (let i = 0; i < listAccomodations.length; i++) {
      if (item.idAccommodation === listAccomodations[i].id) {
        return item;
      }
    }
  });

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

  function handlePage(number) {
    setPage(pages + number);
  }

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
      <ContainerSearch>
        <StyledH1>Trips</StyledH1>
        <SearchFilter />
      </ContainerSearch>

      
      <MainSection>
        {userTripsSearchsReducer?.length > 0
          ? userTripsSearchsReducer.map((accommodation) => (
              <AccommodationCard
                key={accommodation.id}
                accom={accommodation}
                reviewAccommodation={reviewAccommodation}
              />
            ))
          : listAccomodations.map((accommodation) => (
              <AccommodationCard
                key={accommodation.id}
                accom={accommodation}
                reviewAccommodation={reviewAccommodation}
              />
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
      </MainSection>
      <div>
      <StyledButton sx={{borderRadius:"1.5rem"}} onClick={() => handlePage(-1)} variant="contained">
        -
      </StyledButton>
      <StyledButton sx={{borderRadius:"1.5rem"}} onClick={() => handlePage(1)} variant="contained">
        +
      </StyledButton>
      </div>
      <SpecialOffers />
      <Footer />
    </>
  );
}

export default Trips;
