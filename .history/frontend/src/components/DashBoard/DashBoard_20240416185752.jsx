import { IoIosNotifications } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import MainContent from "./MainContent";
import LimitTaker from "./LimitTaker";
import Drawer from "@mui/material/Drawer";
import { Button } from "@mui/material";
import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
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
const DashBoard = () => {
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="px-7 py-4">
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
      <Drawer anchor="top" open={open} onClose={() => setOpen(false)}>
        <div className="bg-[#19264d] p-8">
          <div className="flex w-full justify-around">
            <LimitTaker label={"Spending Limit"} />
            <LimitTaker label={"Loan From Limit"} />
            <LimitTaker label={"Loan To Limit"} />
          </div>
        </div>
      </Drawer>
      <div className="flex items-center justify-between">
        <h1 className="text-[2.5rem]">DashBoard</h1>

        <Button variant="contained" onClick={() => setOpen(true)}>
          Open Drawer
        </Button>

        <div className="flex gap-8 item-center">
          <div className="flex relative">
            <input
              type="text"
              placeholder="Search"
              className="rounded-md outline-none focus:outline-none active:outline-none px-[1rem] bg-[#19264e] text-gray-300"
              onKeyDown={(event) =>
                event.key === "Enter" && console.log(event.target.value)
              }
            />
            <FaSearch className="text-red-500 absolute right-2 top-2" />
          </div>

          <div className="relative">
            <IoIosNotifications
              className="text-green text-[2rem] cursor-pointer"
              onClick={() => setOpenModal(true)}
            />
            <div className="w-2 h-2 rounded-full bg-red-400 absolute top-0 right-0 animate-ping"></div>
          </div>

          <IoIosMail className="text-[2rem]" />
        </div>
      </div>
      <MainContent />
    </div>
  );
};

export default DashBoard;
