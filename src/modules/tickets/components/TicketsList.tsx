import { Box, CircularProgress } from '@mui/material';
import TicketCard from './TicketCard';
import { useQuery } from '@tanstack/react-query';
import { getAllTickets } from '../../../queries/tickets';

const TicketsList = () => {
  const { data, isFetching } = useQuery(getAllTickets());

  if (isFetching) {
    return <CircularProgress />;
  }

  return (
    <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
      {data?.tickets.map((ticket) => (
        <TicketCard
          ticket={{ code: ticket.cutNumber, createdAt: new Date() }}
          areas={['corte', 'manga', 'plancha', 'empaque']}
        />
      ))}
    </Box>
  );
};

export default TicketsList;
