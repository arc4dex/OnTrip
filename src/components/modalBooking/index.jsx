import { BackGroundModalBooking, ContainerBooking } from "./styles";
import { useState } from "react";

import * as React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import { Button, IconButton } from "@mui/material";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useSelector } from "react-redux";

import CloseIcon from "@mui/icons-material/Close";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Api } from "../../services/api";
import { toast } from "react-toastify";

function ModalBooking({ setModal, price }) {
  const params = useParams();

  const userData = useSelector(({ userData }) => userData);

  const token = localStorage.getItem("userToken");

  const [checkin, setCheckin] = useState(new Date());
  const [checkout, setCheckout] = useState(new Date());
  const [dailys, setDailys] = useState(1);
  const [totalPrice, setTotalPrice] = useState(price);
  const [booking, setBooking] = useState({
    userId: userData.id,
    accommodationId: Number(params.id),
    checkin: "",
    checkout: "",
    status: "booked",
  });

  const formSchema = yup.object().shape({
    checkin: yup.string().required("Checkin is required."),
    checkout: yup.string().required("Date of Birth is required."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const handleCheckin = (newValue) => {
    setCheckin(newValue);
  };

  const handleCheckout = (newValue) => {
    setCheckout(newValue);
  };

  function modalClose() {
    setModal(false);
  }

  useEffect(() => {
    const dataBooking = (checkout.getTime() - checkin.getTime()) / 86400000;
    if (dataBooking > 1) {
      setDailys(dataBooking);
    } else {
      setDailys(1);
    }
    setTotalPrice(dailys * price);
  }, [checkin, checkout, dailys, price]);

  const onSubmitFunction = (data) => {
    setBooking({
      userId: userData.id,
      accommodationId: parseInt(params.id),
      checkin: data.checkin,
      checkout: data.checkout,
      status: "booked",
    });

    Api.post("/bookings/", 
      booking, 
      { headers: {Authorization: `Bearer ${token}`}}
    )
      .then((response) => {
        console.log(response);
        toast.success('Booking done')
      })
      .catch((_) =>{
        toast.error('some error occurred')
      })
  };

  return (
    <BackGroundModalBooking>
      <ContainerBooking>
        <div>
          <div className="bookingHeader">
            <h1>
              R$ {price} <span>/ Daily</span>
            </h1>
            <IconButton onClick={modalClose}>
              <CloseIcon />
            </IconButton>
          </div>

          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <MobileDatePicker
                label="Checkin"
                value={checkin}
                onChange={handleCheckin}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    {...register("checkin")}
                    helperText={errors.checkin?.message}
                  />
                )}
              />
            </LocalizationProvider>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <MobileDatePicker
                label="Checkout"
                value={checkout}
                onChange={handleCheckout}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    {...register("checkout")}
                    helperText={errors.checkout?.message}
                  />
                )}
              />
            </LocalizationProvider>
            <section>
              <Button variant="contained" type="submit">
                Booking
              </Button>
            </section>
          </form>
          <section>
            <h1>
              R$ {price} x <span>{dailys}</span>
            </h1>
            <p>R$ {totalPrice}</p>
          </section>
        </div>
      </ContainerBooking>
    </BackGroundModalBooking>
  );
}

export default ModalBooking;
