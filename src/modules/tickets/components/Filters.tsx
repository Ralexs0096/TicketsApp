import {
  Box,
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

const Filters = () => {
  const [searchText, setSearchText] = useState('');
  return (
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
  );
};

export default Filters;
