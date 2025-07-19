import { Grid, Paper, Typography, Container, Box } from '@mui/material';
import { AccountBalance, TrendingUp, TrendingDown } from '@mui/icons-material';

function Dashboard() {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              p: 3,
              display: 'flex',
              flexDirection: 'column',
              height: 140,
              bgcolor: 'primary.main',
              color: 'white',
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <AccountBalance sx={{ fontSize: 40 }} />
              <Typography variant="h6">Saldo Total</Typography>
            </Box>
            <Typography variant="h4" sx={{ mt: 2 }}>R$ 2.200,00</Typography>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              p: 3,
              display: 'flex',
              flexDirection: 'column',
              height: 140,
              bgcolor: 'success.main',
              color: 'white',
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <TrendingUp sx={{ fontSize: 40 }} />
              <Typography variant="h6">Receitas</Typography>
            </Box>
            <Typography variant="h4" sx={{ mt: 2 }}>R$ 3.500,00</Typography>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              p: 3,
              display: 'flex',
              flexDirection: 'column',
              height: 140,
              bgcolor: 'error.main',
              color: 'white',
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <TrendingDown sx={{ fontSize: 40 }} />
              <Typography variant="h6">Despesas</Typography>
            </Box>
            <Typography variant="h4" sx={{ mt: 2 }}>R$ 2.100,00</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Dashboard;
