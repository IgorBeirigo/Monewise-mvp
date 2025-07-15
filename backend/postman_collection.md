# Endpoints para testar no Postman

## 1. Health Check
- Método: GET
- URL: http://localhost:3001/health
- Resposta esperada: { "status": "API is running" }

## 2. Registro de Usuário
- Método: POST
- URL: http://localhost:3001/api/v1/users/register
- Headers: Content-Type: application/json
- Body:
```json
{
    "name": "Teste Usuario",
    "email": "teste@email.com",
    "password": "123456"
}
```

## 3. Login de Usuário
- Método: POST
- URL: http://localhost:3001/api/v1/users/login
- Headers: Content-Type: application/json
- Body:
```json
{
    "email": "teste@email.com",
    "password": "123456"
}
```

Importante: Guarde o token JWT retornado no login, pois será necessário para as próximas requisições.
