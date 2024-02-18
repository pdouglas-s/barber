import { Router, Request, Response } from 'express'
import { CreateUserController } from './controllers/user/CreateUserController'

const router = Router();

// Rotas usuários
router.post('/users', new CreateUserController().handle)

export { router };