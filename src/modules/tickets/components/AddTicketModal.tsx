import { FC } from "react";
import { ModalComponent } from "../../../components/shared/ModalComponent";

interface AddTicketModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const AddTicketModal: FC<AddTicketModalProps> = ({ open, setOpen }) => {
  return (
    <ModalComponent
      title="Add Ticket"
      onClose={() => setOpen(false)}
      open={open}
    >
      <></>
    </ModalComponent>
  );
};

export default AddTicketModal;
