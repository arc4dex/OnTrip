import { Modal, Typography } from "@mui/material";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { toast } from "react-toastify";
import {
  InlineBox,
  SpecialButton,
  StyledBox,
  StyledButton,
  StyledContainer,
  ModalBox,
  StyledForm,
  StyledLine,
  StyledInput,
  MainForm,
  StyledTextField,
} from "./style";

import { useEffect, useState } from "react";
import { FiMinus, FiPlus, FiSearch, FiSettings } from "react-icons/fi";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Api } from "../../services/api";

import { useHistory } from "react-router-dom";

import { useDispatch } from "react-redux";

import { searchFilters } from "../../store/modules/userFilterTrips/actions";

export default function SearchFilter() {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [open, setOpen] = useState(false);
  const [bookingsListFiltereds, setBookingListFiltereds] = useState([]);
  const [newBookingList, setNewBookingList] = useState([]);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }

  const formSchema = yup.object().shape({
    countryCity: yup.string(),
    checkin: yup.string(),
    checkout: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const history = useHistory();

  const dispatch = useDispatch();

  async function onSubmitFunction({ countryCity, checkin, checkout }) {
    const checkinYear = checkin.substring(0, 4);
    const checkinMonth = checkin.substring(5, 7);
    const checkinDay = checkin.substring(8, 10);
    const newCheckin = `${checkinMonth}/${checkinDay}/${checkinYear}`;

    const checkoutYear = checkout.substring(0, 4);
    const checkoutMonth = checkout.substring(5, 7);
    const checkoutDay = checkout.substring(8, 10);
    const newCheckout = `${checkoutMonth}/${checkoutDay}/${checkoutYear}`;

    const places = await Api.get("/accommodation").then((resp) => resp.data);
    const bookings = await Api.get("/bookings").then((resp) => resp.data);

    const filteredPlaces = places.filter((place) => {
      if (
        place?.location?.state
          ?.toLowerCase()
          .includes(countryCity.toLowerCase()) ||
        place?.location?.city
          ?.toLowerCase()
          .includes(countryCity.toLowerCase()) ||
        place?.location?.country
          ?.toLowerCase()
          .includes(countryCity.toLowerCase())
      ) {
        return place;
      }
    });

    let arr = [];

    for (let i = 0; i < filteredPlaces.length; i++) {
      for (let y = 0; y < bookings.length; y++) {
        if (bookings[y].accommodationId === filteredPlaces[i].id) {
          arr.push(bookings[y]);
        }
      }
    }

    let placesRetirar = [];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].checkin === newCheckin || arr[i].checkout === newCheckout) {
        filteredPlaces.filter((place) => {
          if (place.id === arr[i].accommodationId) {
            placesRetirar.push(place);
          }
        });
      }
    }

    let finalPlaces = [];

    if (placesRetirar.length < 1) {
      finalPlaces.push([...filteredPlaces]);
    } else {
      for (let i = 0; i < filteredPlaces.length; i++) {
        for (let j = 0; j < placesRetirar.length; j++) {
          if (filteredPlaces[i].id !== placesRetirar[j].id) {
            finalPlaces.push(filteredPlaces[i]);
          }
        }
      }
    }

    const newArr = finalPlaces[0];

   

    if (finalPlaces.length > 0) {
      dispatch(searchFilters([...newArr]));
      history.push("/trips");
    } 
  }

  const [peopleQt, setPeople] = useState(1);
  const [roomsQt, setRooms] = useState(1);

  function handleSubPeople() {
    if (peopleQt > 1) {
      setPeople(peopleQt - 1);
    }
  }

  function handleAddPeople() {
    setPeople(peopleQt + 1);
  }

  function handleSubRoom() {
    if (roomsQt > 1) {
      setRooms(roomsQt - 1);
    }
  }

  function handleAddRoom() {
    setRooms(roomsQt + 1);
  }

  const [checkinDate, setCheckinDate] = useState("");

  const handleCheckinDate = (newValue) => {
    setCheckinDate(newValue);
  };

  return (
    <>
      <MainForm className="mainForm" onSubmit={handleSubmit(onSubmitFunction)}>
        <StyledContainer>
          <StyledBox
            width="27%"
            color="secondary"
            onClick={
              windowSize.innerWidth <= 600 ? () => handleOpen() : () => ""
            }
          >
            <Typography color="secondary">Country, city</Typography>
            <Typography>
              <input
                type="text"
                placeholder="Type your next trip"
                {...register("countryCity")}
              ></input>
            </Typography>
          </StyledBox>
          <StyledBox width="25.84%" border="secondary">
            <Typography color="secondary" paddingLeft="8%">
              Check-in
            </Typography>
            <InlineBox sx={{ minWidth: "134px" }}>
              <input {...register("checkin")} type="date" />
            </InlineBox>
          </StyledBox>
          <StyledBox width="27%">
            <Typography color="secondary" paddingLeft="8%">
              Check-out
            </Typography>
            <input className="checkoutInput" {...register("checkout")} type="date" />
          </StyledBox>
          <StyledButton
            variant="contained"
            sx={{ width: "20.16%" }}
            type={windowSize.innerWidth <= 600 ? "submit" : ""}
            onClick={
              windowSize.innerWidth <= 600 ? () => handleOpen("open") : () => ""
            }
          >
            {windowSize.innerWidth >= 600 ? (
              <FiSearch size={"28px"} color="white" />
            ) : (
              <FiSettings size={"28px"} color="white" />
            )}
          </StyledButton>

          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <ModalBox
              position="absolute"
              top="20%"
              left="5%"
              width={"90%"}
              display="flex"
              justifyContent={"center"}
              bgcolor="white"
              borderRadius={"8px"}
              padding="10px"
            >
              <StyledForm onSubmit={handleSubmit(onSubmitFunction)}>
                <SpecialButton
                  type="button"
                  onClick={handleClose}
                  sx={{ alignSelf: "flex-end", fontSize: "28px" }}
                >
                  X
                </SpecialButton>

                <div>
                  <StyledLine
                    width="100%"
                    border="secondary"
                    flexDirection="column"
                    height="80px"
                    padding="3%"
                  >
                    <Typography color="secondary" paddingLeft="4%">
                      Country, city, landmark
                    </Typography>
                    <InlineBox justify="space-around" paddingLeft="0">
                      <StyledInput
                        width={"90%"}
                        type="text"
                        {...register("countryCity")}
                      ></StyledInput>
                    </InlineBox>
                  </StyledLine>
                </div>               

                <div>
                  <StyledLine
                    width="100%"
                    border="secondary"
                    flexDirection="column"
                    height="80px"
                    padding="3%"
                  >
                    <Typography color="secondary" paddingLeft="4%">
                      Checkin
                    </Typography>
                    <InlineBox justify="space-around" paddingLeft="0">
                      <StyledInput width={"90%"} type="date"></StyledInput>
                    </InlineBox>
                  </StyledLine>
                </div>
                <div>
                  <StyledLine
                    width="100%"
                    border="secondary"
                    flexDirection="column"
                    height="80px"
                    padding="3%"
                  >
                    <Typography color="secondary" paddingLeft="4%">
                      Checkout
                    </Typography>
                    <InlineBox justify="space-around" paddingLeft="0">
                      <StyledInput width={"90%"} type="date"></StyledInput>
                    </InlineBox>
                  </StyledLine>
                </div>

                <SpecialButton
                  variant="contained"
                  width="100%"
                  sx={{ height: "50px" }}
                  type="submit"
                >
                  Find Trip
                </SpecialButton>
              </StyledForm>
            </ModalBox>
          </Modal>
        </StyledContainer>
      </MainForm>
    </>
  );
}
