import express from 'express';
import { authenticateToken } from '../middleware/authMiddleware.js';

const router = express.Router();

// Transactions
router.post('/transactions', authenticateToken, (req, res) => {
  res.json({ message: 'Transaction created' });
});

router.get('/transactions', authenticateToken, (req, res) => {
  res.json({ message: 'Transactions retrieved' });
});

// Budgets
router.post('/budgets', authenticateToken, (req, res) => {
  res.json({ message: 'Budget created' });
});

router.get('/budgets', authenticateToken, (req, res) => {
  res.json({ message: 'Budgets retrieved' });
});

// AI Insights
router.get('/insights', authenticateToken, (req, res) => {
  res.json({ message: 'AI-powered financial insights' });
});

router.get('/spending-analysis', authenticateToken, (req, res) => {
  res.json({ message: 'Spending pattern analysis' });
});

router.get('/savings-suggestions', authenticateToken, (req, res) => {
  res.json({ message: 'AI-generated savings suggestions' });
});

export default router;
