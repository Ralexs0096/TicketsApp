import { Box } from '@mui/material';
import CardWrapper from './components/shared/CardWrapper';
import ButtonComponent from './components/shared/ButtonComponent';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();

  return (
    <CardWrapper isCenter heightCard={400} widthCard={400}>
      <Box p={2} display="flex" flexWrap="wrap" justifyContent="center">
        <ButtonComponent text="Area" onClickFn={() => navigate('/areas')} />
        <ButtonComponent
          text="Tickets"
          onClickFn={() => navigate('/tickets')}
        />
        <ButtonComponent text="Users" onClickFn={() => navigate('/users')} />
        <ButtonComponent text="Brand" onClickFn={() => navigate('/brands')} />
      </Box>
    </CardWrapper>
  );
}

export default App;
