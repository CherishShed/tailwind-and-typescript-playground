import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useContext } from "react";
import { ModalContext } from "../contexts/modalContext";

export const BasicModal = () => {
  const { isOpen, setIsOpen } = useContext(ModalContext);
  const { data } = isOpen;
  const handleClose = () => setIsOpen({ isOpen: false, id: null, data: null });

  return (
    <div>
      <Modal
        open={isOpen.isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal">
          <img
            src={data?.image}
            alt=""
            className="rounded-t-lg h-1/2 max-h-60 w-full"
          />
          <p id="modal-modal-title" className="text-base font-normal">
            {data?.title}
          </p>
          <Typography
            id="modal-modal-description"
            className="max-h-32 overflow-auto"
            sx={{ mt: 2 }}
          >
            {data?.description}
          </Typography>
          <p className="font-bold text-sm text-red-400">{data?.price}</p>
        </Box>
      </Modal>
    </div>
  );
};
