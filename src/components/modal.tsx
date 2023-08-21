import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import axios from "axios";
import { useContext, useState } from "react";
import { ModalContext } from "../contexts/modalContext";

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
type ModalContent = {
  id: number;
  image: string;
  title: string;
  category: string;
  description: string;
  price: number;
};

export const BasicModal = () => {
  const [data, setData] = useState({} as ModalContent);
  const { isOpen, setIsOpen } = useContext(ModalContext);
  const handleOpen = () => {
    axios
      .get(`https://fakestoreapi.com/products/${isOpen.id}`)
      .then((res) => {
        setData(res.data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleClose = () => setIsOpen({ isOpen: false, id: null });

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={isOpen.isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img src={data.image} alt="" className="rounded-t-lg max-h-52 h-52" />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {data.title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {data.description}
          </Typography>
          <p className="font-bold text-sm text-red-400">{data.price}</p>
        </Box>
      </Modal>
    </div>
  );
};
