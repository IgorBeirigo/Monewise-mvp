import express from 'express';
import { register, login } from '../controllers/userController.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/profile', (req, res) => {
  res.json({ message: 'Rota protegida - em desenvolvimento' });
});

export default router;
