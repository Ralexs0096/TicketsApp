import { AccountCircle } from '@mui/icons-material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { AppBar, IconButton, Toolbar } from '@mui/material';
import { useLocation, useNavigate } from 'react-router';

const AppBarComponent = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <AppBar position="static" color="transparent">
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          {/* Back button is not displayed in the Home */}
          {location.pathname !== '/' && (
            <IconButton
              size="medium"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => navigate(-1)}
              color="inherit"
            >
              <ArrowBackIosNewIcon fontSize="small" />
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
