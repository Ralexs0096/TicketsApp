import { Box, Typography, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const Header = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', my: 2 }}>
      <Typography component="span" variant="h6">
        Tickets Recientes
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography component="span" sx={{ mr: 2 }}>
          9 Tickets
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          startIcon={<AddIcon />}
        >
          Agregar
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
