import { Card, Box, Typography, Chip } from '@mui/material';

interface Props {
  ticket: {
    code: number;
    createdAt: Date;
  };
  areas: string[];
}

const TicketCard: React.FC<Props> = ({ ticket, areas }) => {
  return (
    <Card
      variant="outlined"
      sx={{ padding: 2, borderRadius: 4, width: 'calc(50% - 8px)' }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography component="span" variant="body2">
          {ticket.code}
        </Typography>
        <Typography component="span" variant="body2">
          {ticket.createdAt.toLocaleDateString()}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', marginTop: 2 }}>
        {areas.map((area) => (
          <Chip label={area} variant="filled" sx={{ margin: 0.2 }}></Chip>
        ))}
      </Box>
    </Card>
  );
};

export default TicketCard;
