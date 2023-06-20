import { Box } from '@mui/material';
import CardWrapper from '../../components/shared/CardWrapper';
import ButtonComponent from '../../components/shared/ButtonComponent';
import { Outlet, useNavigate } from 'react-router-dom';

const Area = () => {
  const navigate = useNavigate();

  return (
    <CardWrapper isCenter heightCard={400} widthCard={400}>
      <Box p={2} display="flex" flexWrap="wrap" justifyContent="flex-start">
        <ButtonComponent
          text="Create"
          onClickFn={() => navigate('/areas/create')}
        />
        <ButtonComponent
          text="Update"
          onClickFn={() => navigate('/areas/list')}
        />
        <ButtonComponent
          text="Delete"
          onClickFn={() => navigate('/areas/list')}
        />
      </Box>
      <Outlet />
    </CardWrapper>
  );
};

export default Area;
