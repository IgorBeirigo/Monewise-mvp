import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const ACHIEVEMENTS = {
  FIRST_SAVE: {
    id: 'first_save',
    title: 'Primeiro Passo',
    description: 'Realizou sua primeira economia',
    points: 100
  },
  BUDGET_MASTER: {
    id: 'budget_master',
    title: 'Mestre do Orçamento',
    description: 'Manteve-se dentro do orçamento por 3 meses',
    points: 500
  }
  // ... mais conquistas
};

export async function checkAchievements(userId) {
  const userStats = await calculateUserStats(userId);
  const newAchievements = [];

  // Verifica conquistas
  if (userStats.totalSavings > 0 && !userStats.hasFirstSaveAchievement) {
    newAchievements.push(await unlockAchievement(userId, ACHIEVEMENTS.FIRST_SAVE));
  }

  return newAchievements;
}

export async function getUserLevel(userId) {
  const points = await calculateTotalPoints(userId);
  return {
    level: Math.floor(points / 1000) + 1,
    points,
    nextLevelPoints: (Math.floor(points / 1000) + 1) * 1000
  };
}
