import { Drawer, List, ListItem, ListItemIcon, ListItemText, Box, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {
  Dashboard as DashboardIcon,
  AccountBalance as TransactionsIcon,
  PieChart as BudgetIcon,
  Flag as GoalsIcon,
  Person as ProfileIcon
} from '@mui/icons-material';

const menuItems = [
  { path: '/', label: 'Dashboard', icon: <DashboardIcon /> },
  { path: '/transactions', label: 'Transações', icon: <TransactionsIcon /> },
  { path: '/budget', label: 'Orçamento', icon: <BudgetIcon /> },
  { path: '/goals', label: 'Metas', icon: <GoalsIcon /> },
  { path: '/profile', label: 'Perfil', icon: <ProfileIcon /> }
];

function Sidebar() {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: 240,
          boxSizing: 'border-box',
          mt: '64px', // Altura do header
          backgroundColor: theme.palette.background.default,
          borderRight: '1px solid rgba(0, 0, 0, 0.12)',
        },
      }}
    >
      <Box sx={{ overflow: 'auto', mt: 2 }}>
        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.path}
              onClick={() => navigate(item.path)}
              sx={{
                mb: 1,
                mx: 1,
                borderRadius: 1,
                '&:hover': {
                  backgroundColor: 'primary.light',
                  '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                    color: 'white',
                  },
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: 40 }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
}

export default Sidebar;
