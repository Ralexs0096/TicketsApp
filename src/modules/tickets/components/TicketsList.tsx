import { Box } from '@mui/material';
import TicketCard from './TicketCard';

const TicketsList = () => {
  return (
    <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
      {[1, 2, 3, 4, 5].map(() => (
        <TicketCard
          ticket={{ code: 1234, createdAt: new Date() }}
          areas={['corte', 'manga', 'plancha', 'empaque']}
        />
      ))}
    </Box>
  );
};

export default TicketsList;
