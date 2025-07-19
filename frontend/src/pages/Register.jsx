import { useState } from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import { Box, TextField, Button, Typography, Link } from '@mui/material';
import { useSnackbar } from 'notistack';
import api from '../services/api';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/users/register', { name, email, password });
      enqueueSnackbar('Conta criada com sucesso!', { variant: 'success' });
      navigate('/login');
    } catch (error) {
      enqueueSnackbar(error.response?.data?.error || 'Erro ao criar conta', { 
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
        backgroundColor: '#f5f5f5'
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: 300,
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
          Criar Conta
        </Typography>

        <TextField
          fullWidth
          label="Nome"
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <TextField
          fullWidth
          label="Email"
          margin="normal"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextField
          fullWidth
          label="Senha"
          type="password"
          margin="normal"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        
        <Button 
          type="submit" 
          variant="contained" 
          fullWidth 
          sx={{ mt: 2 }}
        >
          Criar Conta
        </Button>
        
        <Box sx={{ mt: 2, textAlign: 'center' }}>
          <Typography variant="body2">
            Já tem uma conta?{' '}
            <Link component={RouterLink} to="/login">
              Faça login
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Register;
