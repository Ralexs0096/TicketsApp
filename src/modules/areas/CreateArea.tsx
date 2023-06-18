import { useState } from 'react';
import ModalComponent from '../../components/shared/ModalComponent';
import CreateAreaForm from './components/CreateAreaForm';
import { useNavigate } from 'react-router-dom';

const CreateArea = () => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(true);

  const handleCloseModal = () => {
    setOpenModal(false);
    navigate(-1);
  };

  return (
    <ModalComponent openModal={openModal} closeModal={handleCloseModal}>
      <CreateAreaForm />
    </ModalComponent>
  );
};

export default CreateArea;
