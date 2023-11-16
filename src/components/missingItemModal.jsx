import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { IconButton } from "@mui/material";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const MissingItemModal = ({ open, setOpen, handleClose, handleOpen }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
            sx={{
              position: "absolute",
              top: 0,
              right: 10,
            }}
          >
            <ClearOutlinedIcon />
          </IconButton>
          <Typography id="modal-modal-title" variant="h5" component="h2">
            Missing Product
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, fontSize: "1rem" }}
          >
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default MissingItemModal;
