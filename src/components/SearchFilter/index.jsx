import { Modal, Typography, TextField } from "@mui/material";
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
} from "./style";
import { useEffect, useState } from "react";
import { FiMinus, FiPlus, FiSearch, FiSettings } from "react-icons/fi";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export default function SearchFilter() {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [open, setOpen] = useState(false);
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
    people: yup.number(),
    rooms: yup.number(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  function onSubmitFunction(data) {
    // console.log(data);
  }

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
            <Typography  color="secondary">Country, city</Typography>
            <Typography>
              <input
                type="text"
                value={"Estonia"}
                {...register("countryCity")}
              ></input>
            </Typography>
          </StyledBox>

          <StyledBox width="13.37%" border="secondary">
            <Typography color="secondary" paddingLeft="8%">
              People
            </Typography>
            <InlineBox>
              <SpecialButton>
                <FiMinus />
              </SpecialButton>
              <StyledInput value={"2"} {...register("people")}></StyledInput>
              <SpecialButton>
                <FiPlus />
              </SpecialButton>
            </InlineBox>
          </StyledBox>
          <StyledBox width="13.63%" border="secondary">
            <Typography color="secondary" paddingLeft="8%">
              Rooms
            </Typography>
            <InlineBox>
              <SpecialButton>
                <FiMinus />
              </SpecialButton>
              <StyledInput value={"2"} {...register("rooms")}></StyledInput>
              <SpecialButton>
                <FiPlus />
              </SpecialButton>
            </InlineBox>
          </StyledBox>
          <StyledBox width="25.84%" border="secondary">
            <Typography color="secondary" paddingLeft="8%">
              Dates
            </Typography>
            <InlineBox sx={{ minWidth: "134px" }}>
              30.12.21 – 07.01.22
            </InlineBox>
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
                        value={"Estonia"}
                        {...register("countryCity")}
                      ></StyledInput>
                    </InlineBox>
                  </StyledLine>
                </div>

                <div>
                  <StyledLine
                    width="40%"
                    border="secondary"
                    flexDirection="column"
                    height="80px"
                    padding="3%"
                  >
                    <Typography color="secondary" paddingLeft="8%">
                      People
                    </Typography>
                    <InlineBox justify="space-around" paddingLeft="0">
                      <SpecialButton>
                        <FiMinus />
                      </SpecialButton>
                      <StyledInput
                        type="number"
                        value={"2"}
                        {...register("people")}
                      ></StyledInput>
                      <SpecialButton>
                        <FiPlus />
                      </SpecialButton>
                    </InlineBox>
                  </StyledLine>

                  <StyledLine
                    width="40%"
                    border="secondary"
                    flexDirection="column"
                    height="80px"
                    padding="3%"
                  >
                    <Typography color="secondary" paddingLeft="8%">
                      Rooms
                    </Typography>
                    <InlineBox justify="space-around" paddingLeft="0">
                      <SpecialButton>
                        <FiMinus />
                      </SpecialButton>
                      <StyledInput
                        type="number"
                        value={"2"}
                        {...register("rooms")}
                      ></StyledInput>
                      <SpecialButton>
                        <FiPlus />
                      </SpecialButton>
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
                      Date
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
