import { Avatar } from "@mui/material";
import { ReviewDiv } from "./style";
import { AiOutlineEdit } from "react-icons/ai";
import { useState } from "react";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import { StyledButton } from "../ReviewsApp/style";
import { Api } from "../../services/api";
import { toast } from "react-toastify";

function CardReviews({ element }) {
  const [open, setOpen] = useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);

  const schema = yup.object().shape({
    review: yup.string().min(20, "Please, type at least 20 characters"),
  });

  const textFieldStyle = {
    width: 300,
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 350,
    height: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function stringAvatar(name) {
    return {
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }

  function editReview(data) {
    const userToken = localStorage.getItem("userToken");
    const editedReview = {
      userId: element.userId,
      message: data.review,
    };
    Api.patch(`/appReview/${element.id}`, editedReview, {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    })
      .then(
        (response) => response.data,
        toast.success("Sua review foi alterada com sucesso!")
      )
      .catch(
        (err) => err,
        toast.error("Opa, alguma coisa deu errado, tente novamente!")
      );

    closeModal();
  }

  return (
    <>
      <ReviewDiv>
        <Avatar
          src={element.userPicture && element.userPicture}
          // {...stringAvatar(element?.userName)}
          className="avatar"
          sx={{ width: "3.5rem", height: "3.5rem" }}
        />
        <p>{element?.message}</p>
        <span>
          <b>{element?.userName}</b>
          {localStorage.getItem("userId") == element.userId ? (
            <i onClick={openModal}>
              Editar <AiOutlineEdit />
            </i>
          ) : (
            ""
          )}
        </span>
      </ReviewDiv>
      <Modal
        open={open}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField
            id="outlined-multiline-static"
            label="Type your Review"
            multiline
            rows={8}
            sx={textFieldStyle}
            {...register("review")}
            defaultValue={element.message}
          />
          <p style={{ color: "#ee685f" }}>{errors.review?.message}</p>
          <StyledButton onClick={handleSubmit(editReview)} variant="contained">
            Edit Review
          </StyledButton>
        </Box>
      </Modal>
    </>
  );
}

export default CardReviews;
