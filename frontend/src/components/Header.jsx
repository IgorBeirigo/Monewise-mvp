import { AppBar, Toolbar, Typography, IconButton, Avatar } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';

function Header() {
  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          MoneyWise
        </Typography>
        <Avatar sx={{ bgcolor: 'secondary.main' }}>U</Avatar>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
