import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function predictExpenses(userId) {
  const lastThreeMonths = await getLastMonthsData(userId, 3);
  
  // Análise de padrões de gastos
  const predictedExpenses = calculatePredictions(lastThreeMonths);
  const recommendations = generateRecommendations(predictedExpenses, lastThreeMonths);
  
  return {
    predictions: predictedExpenses,
    recommendations,
    confidence_score: calculateConfidenceScore(lastThreeMonths)
  };
}

export async function getFinancialAssistant(userId) {
  const userProfile = await analyzeUserProfile(userId);
  
  return {
    spending_alerts: userProfile.alerts,
    investment_suggestions: generateInvestmentSuggestions(userProfile),
    savings_tips: generateSavingsTips(userProfile),
    achievements: userProfile.achievements
  };
}

// Funções auxiliares internas...
