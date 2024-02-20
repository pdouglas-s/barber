import { Router, Request, Response } from 'express'
import { CreateUserController } from './controllers/user/CreateUserController'
import { AuthUserController } from './controllers/user/AuthUserController';
import { DetailUserController } from './controllers/user/DetailUserController';
import { UpdateUserController } from './controllers/user/UpdateUserController';
import { isAuthenticate } from './middlewares/isAuthenticate';


import { CreateHaircutController } from './controllers/haircut/CreateHaircutController'

const router = Router();

// Rotas usuários
router.post('/users', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)
router.get('/me', isAuthenticate, new DetailUserController().handle)
router.put('/users', isAuthenticate, new UpdateUserController().handle)


// Rotas modelos de corte
router.post('/haircut', isAuthenticate, new CreateHaircutController().handle)

export { router };