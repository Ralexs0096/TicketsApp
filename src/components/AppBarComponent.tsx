import { AccountCircle } from '@mui/icons-material';
import { AppBar, IconButton, Toolbar } from '@mui/material';

const AppBarComponent = () => {
  return (
    <AppBar
      position="static"
      color="default"
      sx={{
        backgroundColor: 'transparent',
        border: 1,
        borderRadius: 2,
        borderColor: 'gray',
        boxShadow: 'none'
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComponent;
