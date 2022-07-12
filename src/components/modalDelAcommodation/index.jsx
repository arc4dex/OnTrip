import { Button, Modal } from "@mui/material";

import {
  BackgroundModal,
  ModalContainer,
  ModalFooter,
  ModalHeader,
  ModalHeaderButton,
  ModalHeaderText,
} from "./style";

function ModalDelAcommodation({ modalDelete, closeModal, openModal }) {
  return (
    <>
      {modalDelete && (
        <Modal open={modalDelete} onClose={closeModal}>
          <BackgroundModal>
            <ModalContainer>
              <ModalHeader>
                <ModalHeaderButton>
                  <Button
                    sx={{ minWidth: "5px" }}
                    onClick={closeModal}
                    variant="text"
                    color="secondary"
                  >
                    X
                  </Button>
                </ModalHeaderButton>
                <ModalHeaderText>
                  <p>You really want to delete?</p>
                </ModalHeaderText>
              </ModalHeader>

              <ModalFooter>
                <Button
                  onClick={closeModal}
                  // fazer a função que deleta na api

                  variant="outlined"
                  color="secondary"
                  sx={{ width: "100%" }}
                >
                  Yes
                </Button>
                <Button
                  variant="contained"
                  sx={{ width: "100%" }}
                  onClick={closeModal}
                >
                  No
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
