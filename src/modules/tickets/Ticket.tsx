import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  Chip,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography
} from '@mui/material';
import CardWrapper from '../../components/shared/CardWrapper';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';

const Ticket = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <CardWrapper isCenter heightCard={900} widthCard={600}>
      {/* Header */}
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
      {/* Filters Section */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <TextField
          size="small"
          value={searchText}
          placeholder="Buscar por número de ticket..."
          onChange={(e) => setSearchText(e.target.value)}
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            )
          }}
          sx={{
            bgcolor: '#f4f4f4',
            borderRadius: 2,
            width: '100%',
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                border: 0
              },
              '&:hover fieldset': {
                borderColor: '#bbb'
              },
              '&.Mui-focused fieldset': {
                borderColor: '#999'
              }
            }
          }}
        />
        <FormControl
          size="small"
          variant="outlined"
          sx={{
            bgcolor: '#f4f4f4',
            borderRadius: 2,
            ml: 2,
            minWidth: 140,
            '& .MuiOutlinedInput-notchedOutline': { border: 0 },
            '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#bbb' },
            '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: '#999'
            }
          }}
        >
          <InputLabel id="area-filter-label">Areas</InputLabel>
          <Select
            labelId="area-filter-label"
            id="area-filter"
            label="Area"
            defaultValue=""
            onChange={(e) =>
              console.log('filter:', (e.target as HTMLInputElement).value)
            }
          >
            <MenuItem value="">Todas las partes</MenuItem>
            <MenuItem value="corte">Corte</MenuItem>
            <MenuItem value="manga">Manga</MenuItem>
            <MenuItem value="plancha">Plancha</MenuItem>
            <MenuItem value="empaque">Empaque</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* tickets preview */}
      <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
        {[1, 2, 3, 4, 5].map(() => (
          <Card
            variant="outlined"
            sx={{ padding: 2, borderRadius: 4, width: 'calc(50% - 8px)' }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography component="span" variant="body2">
                TK-1234
              </Typography>
              <Typography component="span" variant="body2">
                10:30
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', marginTop: 2 }}>
              {['corte', 'manga', 'plancha', 'empaque'].map((area) => (
                <Chip label={area} variant="filled" sx={{ margin: 0.2 }}></Chip>
              ))}
            </Box>
          </Card>
        ))}
      </Box>
    </CardWrapper>
  );
};

export default Ticket;
