import { createFileRoute } from '@tanstack/react-router';
import CardWrapper from '../../components/shared/CardWrapper';
import { Box } from '@mui/material';

export const Route = createFileRoute('/_authenticated/')({
  component: App
});

function App() {
  return (
    <CardWrapper isCenter heightCard={400} widthCard={400}>
      <Box p={2} display="flex" flexWrap="wrap" justifyContent="center"></Box>
    </CardWrapper>
  );
}
