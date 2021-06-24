import { Router } from 'express';
import { CreateTagController } from './controllers/CreateTagController';
import { CreateUserController } from './controllers/CreateUserController';
import { ensureAdmin } from './middlewares/ensureAdmin';


const router = Router();

const createTagController = new CreateTagController();
const createUserController = new CreateUserController()

/**
 *  Todas as rotas abaixo do route.use usariam o middleware
 * e precisariam ser um admim
 * 
 * router.use(ensureAdmin)
 *
 */

router.post('/tags', ensureAdmin, createTagController.handle)
router.post('/users', createUserController.handle)

export { router }