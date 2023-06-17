import { Typography } from '@mui/material';
import CardWrapper from './components/shared/CardWrapper';

function App() {
  return (
    <CardWrapper isCenter heightCard={400} widthCard={400}>
      <Typography>This is a Test</Typography>
    </CardWrapper>
  );
}

export default App;
