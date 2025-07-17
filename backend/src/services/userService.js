import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
const saltRounds = 10;

export async function registerUser(name, email, password) {
  try {
    const existingUser = await prisma.user.findUnique({ where: { email } });

    if (existingUser) {
      throw new Error('E-mail já cadastrado');
    }

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword
      }
    });

    // Remove a senha antes de retornar
    const { password: _, ...userWithoutPassword } = user;
    return userWithoutPassword;

  } catch (error) {
    console.error('Erro ao registrar usuário:', error);
    throw error;
  }
}

export async function loginUser(email, password) {
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    throw new Error('Usuário não encontrado');
  }

  const isValidPassword = await bcrypt.compare(password, user.password);

  if (!isValidPassword) {
    throw new Error('Senha incorreta');
  }

  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
    expiresIn: '2h'
  });

  return { token, user: { id: user.id, name: user.name, email: user.email } };
}
