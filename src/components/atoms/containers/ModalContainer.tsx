import styled from "@emotion/styled";
import { Box, Modal, Backdrop, Fade } from "@mui/material";
import React, { ReactElement } from "react";
import { useAddressContext } from "contexts/AddressProvider";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50vw",
  bgcolor: "background.paper",
  boxShadow: 24,
};

const StyledBox = styled(Box)({
  backgroundColor: "white",
  padding: "16px",
  boxShadow: `
    0px 9px 46px 8px #0000001F,
    0px 24px 38px 3px #00000024,
    0px 11px 15px -7px #00000033
  `,
  borderRadius: "8px",
});

const ModalContainer = ({ children }: { children: ReactElement }) => {
  const { isOpened, toggleAddressModal } = useAddressContext();
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={isOpened}
      onClose={toggleAddressModal}
      closeAfterTransition
      slots={{
        backdrop: Backdrop,
      }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={isOpened}>
        <StyledBox sx={style}>{children}</StyledBox>
      </Fade>
    </Modal>
  );
};

export default ModalContainer;
