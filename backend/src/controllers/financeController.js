import * as financeService from '../services/financeService.js';

export async function createEntry(req, res) {
  try {
    const { type, categoryId, amount, description, date } = req.body;
    const userId = req.user.id;

    const entry = await financeService.createEntry(userId, {
      type,
      categoryId,
      amount,
      description,
      date: new Date(date)
    });

    res.status(201).json(entry);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function getMonthlyReport(req, res) {
  try {
    const { month, year } = req.query;
    const userId = req.user.id;

    const report = await financeService.getMonthlyReport(
      userId,
      parseInt(month),
      parseInt(year)
    );

    res.json(report);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function getInsights(req, res) {
  try {
    const userId = req.user.id;
    const insights = await financeService.analyzeTrends(userId);
    res.json(insights);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
