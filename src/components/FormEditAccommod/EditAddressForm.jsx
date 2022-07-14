import { Button, IconButton, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { StyledPaperModal } from "./style";

import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { toast } from "react-toastify";

import { useDispatch } from "react-redux";
import { setAddress } from "../../store/modules/accommodAddress/actions";

function EditAddressForm({ handleCloseModal, currentAccommodation }) {
  const dispatch = useDispatch();

  const formSchemaAddress = yup.object().shape({
    streetAddress: yup.string().required("Please enter an address."),
    complement: yup.string(),
    zipCode: yup.string().required("Please enter a zip/postal code."),
    city: yup.string().required("Please enter a city."),
    state: yup.string().required("Please enter a state."),
    country: yup.string().required("Please enter a state."),
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      streetAddress: currentAccommodation[0]?.location.streetAddress,
      complement: currentAccommodation[0]?.location.complement,
      zipCode: currentAccommodation[0]?.location.zipCode,
      city: currentAccommodation[0]?.location.city,
      state: currentAccommodation[0]?.location.state,
      country: currentAccommodation[0]?.location.country,
    },
    resolver: yupResolver(formSchemaAddress),
  });

  function onSubmitFunctionAddress(data) {
    const location = data;
    dispatch(setAddress(location));
    handleCloseModal();
    toast.success("Address successfully edited.");
  }

  return (
    <StyledPaperModal>
      <form onSubmit={handleSubmit(onSubmitFunctionAddress)}>
        <h2>Edit Address</h2>

        <Controller
          control={control}
          name="streetAddress"
          render={({ field: { onChange, value, ref } }) => (
            <TextField
              inputRef={ref}
              value={value}
              onChange={onChange}
              label="Address"
              id="outlined-basic"
              variant="outlined"
              sx={{ width: "100%" }}
              size="small"
              error={errors.streetAddress?.message}
              helperText={errors.streetAddress?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="complement"
          render={({ field: { onChange, value, ref } }) => (
            <TextField
              inputRef={ref}
              value={value}
              onChange={onChange}
              label="Address Complement"
              id="outlined-basic"
              variant="outlined"
              sx={{ width: "100%" }}
              size="small"
              error={errors.complement?.message}
              helperText={errors.complement?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="zipCode"
          render={({ field: { onChange, value, ref } }) => (
            <TextField
              inputRef={ref}
              value={value}
              onChange={onChange}
              type="number"
              label="Zip/Postal Code"
              id="outlined-basic"
              variant="outlined"
              sx={{ width: "100%" }}
              size="small"
              error={errors.zipCode?.message}
              helperText={errors.zipCode?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="city"
          render={({ field: { onChange, value, ref } }) => (
            <TextField
              inputRef={ref}
              value={value}
              onChange={onChange}
              label="City"
              id="outlined-basic"
              variant="outlined"
              sx={{ width: "100%" }}
              size="small"
              error={errors.city?.message}
              helperText={errors.city?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="state"
          render={({ field: { onChange, value, ref } }) => (
            <TextField
              inputRef={ref}
              value={value}
              onChange={onChange}
              label="State"
              id="outlined-basic"
              variant="outlined"
              sx={{ width: "100%" }}
              size="small"
              error={errors.state?.message}
              helperText={errors.state?.message}
            />
          )}
        />

        <Controller
          control={control}
          name="country"
          render={({ field: { onChange, value, ref } }) => (
            <TextField
              inputRef={ref}
              value={value}
              onChange={onChange}
              label="Country"
              id="outlined-basic"
              variant="outlined"
              sx={{ width: "100%" }}
              size="small"
              error={errors.country?.message}
              helperText={errors.country?.message}
            />
          )}
        />

        <Button variant="contained" type="submit">
          Edit address
        </Button>
      </form>
      <IconButton
        onClick={handleCloseModal}
        color="primary"
        sx={{ padding: "7px", position: "absolute", top: 0, right: 0 }}
      >
        <CloseIcon />
      </IconButton>
    </StyledPaperModal>
  );
}

export default EditAddressForm;
