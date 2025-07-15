import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';

dotenv.config();

const app = express();

// Middlewares de parsing (devem vir primeiro)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Middleware de log para debugar as requisições
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  console.log('Body:', req.body);
  console.log('Headers:', req.headers);
  next();
});

// Rota de teste (deve vir antes das outras rotas)
app.get('/health', (req, res) => {
  console.log('Health check endpoint acessado');
  res.json({ status: 'API is running' });
});

// Rotas da API
app.use('/api/v1/users', userRoutes); 

// Middleware de erro 404
app.use((req, res) => {
  console.log(`404 - Rota não encontrada: ${req.method} ${req.path}`);
  res.status(404).json({ error: 'Rota não encontrada' });
});

// Middleware de erro global
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Erro interno do servidor' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
