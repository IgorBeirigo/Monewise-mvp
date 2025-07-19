import { useState } from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import { Box, TextField, Button, Typography, Link } from '@mui/material';
import { useSnackbar } from 'notistack';
import api from '../services/api';
import { useAuth } from '../contexts/AuthContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await api.post('/users/login', { email, password });
      login(data.user, data.token);
      navigate('/');
    } catch (error) {
      enqueueSnackbar(error.response?.data?.error || 'Erro ao fazer login', { 
        variant: 'error' 
      });
    }
  };

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#cec0c0ff'
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: 400,
          p: 4,
          backgroundColor: 'offwhite',
          borderRadius: 2,
          boxShadow: 1
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          MoneyWise
        </Typography>
        <Typography variant="h6" align="center" gutterBottom>
          Login
        </Typography>
        <TextField 
          fullWidth 
          label="Email" 
          margin="normal" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField 
          fullWidth 
          label="Senha" 
          type="password" 
          margin="normal" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button 
          type="submit" 
          variant="contained" 
          fullWidth 
          sx={{ mt: 2 }}
        >
          Entrar
        </Button>
        
        <Box sx={{ mt: 2, textAlign: 'center' }}>
          <Typography variant="body2">
            Não tem uma conta?{' '}
            <Link component={RouterLink} to="/register">
              Registre-se
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Login;
