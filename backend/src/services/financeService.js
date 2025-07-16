import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function createEntry(userId, data) {
  return await prisma.entry.create({
    data: {
      ...data,
      userId
    },
    include: {
      category: true
    }
  });
}

export async function createBudget(userId, data) {
  return await prisma.budget.create({
    data: {
      ...data,
      userId
    },
    include: {
      category: true
    }
  });
}

export async function getMonthlyReport(userId, month, year) {
  const entries = await prisma.entry.findMany({
    where: {
      userId,
      AND: [
        {
          date: {
            gte: new Date(year, month - 1, 1)
          }
        },
        {
          date: {
            lt: new Date(year, month, 1)
          }
        }
      ]
    },
    include: {
      category: true
    }
  });

  const totalIncome = entries
    .filter(entry => entry.type === 'income')
    .reduce((sum, entry) => sum + entry.amount, 0);

  const totalExpenses = entries
    .filter(entry => entry.type === 'expense')
    .reduce((sum, entry) => sum + entry.amount, 0);

  return {
    totalIncome,
    totalExpenses,
    balance: totalIncome - totalExpenses,
    entries
  };
}

export async function analyzeTrends(userId) {
  // Implementar análise de tendências usando IA
  // Esta é uma função que pode ser expandida posteriormente
  return {
    spending_patterns: [],
    suggestions: [],
    alerts: []
  };
}
