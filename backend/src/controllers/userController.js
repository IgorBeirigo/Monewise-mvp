import { registerUser, loginUser } from '../services/userService.js';

export async function register(req, res) {
  try {
    console.log('Dados recebidos:', req.body);
    
    if (!req.body) {
      return res.status(400).json({ error: 'Body da requisição está vazio' });
    }

    const { name, email, password } = req.body;
    
    // Log dos dados após desestruturação
    console.log('Dados extraídos:', { name, email, password: '***' });

    // Validação básica
    if (!name || !email || !password) {
      return res.status(400).json({ 
        error: 'Todos os campos são obrigatórios (nome, email, senha)' 
      });
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Formato de email inválido' });
    }

    // Validação de senha
    if (password.length < 6) {
      return res.status(400).json({ 
        error: 'A senha deve ter pelo menos 6 caracteres' 
      });
    }

    const user = await registerUser(name, email, password);
    res.status(201).json({ message: 'Usuário criado com sucesso', user });
  } catch (error) {
    console.error('Erro detalhado:', error);
    res.status(400).json({ 
      error: error.message,
      details: 'Verifique se os dados foram enviados corretamente no formato JSON'
    });
  }
}

export async function login(req, res) {
  try {
    const { email, password } = req.body;
    
    // Validação básica
    if (!email || !password) {
      return res.status(400).json({ 
        error: 'Email e senha são obrigatórios' 
      });
    }

    const data = await loginUser(email, password);
    res.status(200).json(data);
  } catch (error) {
    console.error('Erro no login:', error);
    res.status(401).json({ error: error.message });
  }
}
