import { Button, Modal } from "@mui/material";
import { Api } from "../../services/api";

import {
  BackgroundModal,
  ModalContainer,
  ModalFooter,
  ModalHeader,
  ModalHeaderText,
} from "./style";

import { toast } from "react-toastify";

function ModalDelAcommodation({
  modalDelete,
  closeModal,
  idAccommodation,
  reload,
  setReload,
}) {
  async function deleteAccommodation() {
    await Api.delete(`/accommodation/${idAccommodation}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    })
      .then((response) => {
        console.log(response);
        toast.success("Accommodation successfully deleted!");
        closeModal();
        setReload(!reload);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Ops! Something went wrong. Please try again.");
        closeModal();
      });
  }

  return (
    <>
      {modalDelete && (
        <Modal open={modalDelete} onClose={closeModal}>
          <BackgroundModal>
            <ModalContainer>
              <Button
                sx={{ minWidth: "6px" }}
                onClick={closeModal}
                variant="text"
                color="secondary"
                className="closeButton"
              >
                X
              </Button>

              <ModalHeader>
                <ModalHeaderText>
                  <p>Are you sure you want to delete this accommodation?</p>
                </ModalHeaderText>
              </ModalHeader>

              <ModalFooter>
                <Button
                  onClick={deleteAccommodation}
                  variant="contained"
                  sx={{ width: "100%", textTransform: "capitalize" }}
                >
                  Yes
                </Button>
                <Button
                  variant="outlined"
                  sx={{ width: "100%", textTransform: "capitalize" }}
                  onClick={deleteAccommodation}
                >
                  Cancel
                </Button>
              </ModalFooter>
            </ModalContainer>
          </BackgroundModal>
        </Modal>
      )}
    </>
  );
}

export default ModalDelAcommodation;
