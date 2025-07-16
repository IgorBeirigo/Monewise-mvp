import express from 'express';
import { register, login } from '../controllers/userController.js';
import { authenticateToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/profile', authenticateToken, (req, res) => {
  res.json({ userId: req.user.id, message: 'Profile data retrieved successfully' });
});
router.put('/preferences', authenticateToken, (req, res) => {
  res.json({ message: 'User preferences updated' });
});
router.get('/dashboard-summary', authenticateToken, (req, res) => {
  res.json({ message: 'User dashboard summary' });
});

export default router;
