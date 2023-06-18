import { CSSProperties } from 'react';
import { Box, Modal } from '@mui/material';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #fdfdfd',
  borderRadius: 1,
  boxShadow: 12,
  p: 2
};

interface ModalComponentProps {
  openModal: boolean;
  closeModal: () => void;
  children: JSX.Element;
  styles?: CSSProperties;
}

const ModalComponent: React.FC<ModalComponentProps> = ({
  openModal,
  closeModal,
  children,
  styles
}) => {
  return (
    <Modal open={openModal} onClose={closeModal}>
      <Box sx={{ ...style, ...styles }}>{children}</Box>
    </Modal>
  );
};

export default ModalComponent;
