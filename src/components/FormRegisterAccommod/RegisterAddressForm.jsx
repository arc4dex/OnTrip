import { Button, IconButton, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { StyledPaperModal } from "./style";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useDispatch } from "react-redux";
import { setAddress } from "../../store/modules/accommodAddress/actions";

function RegisterAddressForm({ handleCloseModal }) {
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
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchemaAddress) });

  function onSubmitFunctionAddress(data) {
    const location = data;
    dispatch(setAddress(location));
    handleCloseModal();
  }

  return (
    <StyledPaperModal>
      <form onSubmit={handleSubmit(onSubmitFunctionAddress)}>
        <h2>Register Address</h2>
        <TextField
          {...register("streetAddress")}
          label="Address"
          id="outlined-basic"
          variant="outlined"
          color="secondary"
          sx={{ width: "100%" }}
          size="small"
          error={errors.streetAddress?.message}
          helperText={errors.streetAddress?.message}
        />
        <TextField
          {...register("complement")}
          label="Address Complement"
          id="outlined-basic"
          variant="outlined"
          color="secondary"
          sx={{ width: "100%" }}
          size="small"
          error={errors.complement?.message}
          helperText={errors.complement?.message}
        />
        <TextField
          {...register("zipCode")}
          type="number"
          label="Zip/Postal Code"
          id="outlined-basic"
          variant="outlined"
          color="secondary"
          sx={{ width: "100%" }}
          size="small"
          error={errors.zipCode?.message}
          helperText={errors.zipCode?.message}
        />
        <TextField
          {...register("city")}
          label="City"
          id="outlined-basic"
          variant="outlined"
          color="secondary"
          sx={{ width: "100%" }}
          size="small"
          error={errors.city?.message}
          helperText={errors.city?.message}
        />
        <TextField
          {...register("state")}
          label="State"
          id="outlined-basic"
          variant="outlined"
          color="secondary"
          sx={{ width: "100%" }}
          size="small"
          error={errors.state?.message}
          helperText={errors.state?.message}
        />
        <TextField
          {...register("country")}
          label="Country"
          id="outlined-basic"
          variant="outlined"
          color="secondary"
          sx={{ width: "100%" }}
          size="small"
          error={errors.country?.message}
          helperText={errors.country?.message}
        />
        <Button variant="contained" type="submit">
          Save address
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

export default RegisterAddressForm;
