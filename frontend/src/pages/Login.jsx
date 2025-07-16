import { Box, TextField, Button, Typography } from '@mui/material';

function Login() {
  return (
    <Box sx={{ mt: 10, mx: 'auto', width: 300 }}>
      <Typography variant="h5" gutterBottom>Login</Typography>
      <TextField fullWidth label="Email" margin="normal" />
      <TextField fullWidth label="Senha" type="password" margin="normal" />
      <Button variant="contained" fullWidth sx={{ mt: 2 }}>Entrar</Button>
    </Box>
  );
}

export default Login;
