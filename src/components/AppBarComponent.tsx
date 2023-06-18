import { AccountCircle } from '@mui/icons-material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { AppBar, IconButton, Toolbar } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

const AppBarComponent = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <AppBar position="static" color="default">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          {location.pathname !== '/' && (
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => navigate(-1)}
              color="inherit"
            >
              <ArrowBackIosNewIcon />
            </IconButton>
          )}
        </div>

        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={() => console.log('')}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComponent;
