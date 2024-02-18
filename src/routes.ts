import { Router, Request, Response } from 'express'
import { CreateUserController } from './controllers/user/CreateUserController'
import { AuthUserController } from './controllers/user/AuthUserController';

const router = Router();

// Rotas usuários
router.post('/users', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)

export { router };