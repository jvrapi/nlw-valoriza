import { Router } from 'express';
import { CreateTagController } from './controllers/CreateTagController';
import { CreateUserController } from './controllers/CreateUserController';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateComplimentController } from './controllers/CreateComplimentController';
import { ensureAdmin } from './middlewares/ensureAdmin';
import { ensureAuthenticate } from './middlewares/ensureAuthenticate';
import { ListUserSendComplimentsController } from './controllers/ListUserSendComplimentsController';
import { ListUserReceiveComplimentsController } from './controllers/ListUserReceiveComplimentsController';
import { ListTagsController } from './controllers/ListTagsController';
import { ListUsersController } from './controllers/ListUsersController';

const router = Router();

const createTagController = new CreateTagController();
const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserSendComplimentsController = new ListUserSendComplimentsController();
const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController();
const listTagsController = new ListTagsController();
const listUsersController = new ListUsersController();


/**
 *  Todas as rotas abaixo do route.use usariam o middleware
 * e precisariam ser um admim
 * 
 * router.use(ensureAdmin)
 *
 */

router.post('/tags', ensureAuthenticate, ensureAdmin, createTagController.handle);
router.post('/users', createUserController.handle);
router.post('/login', authenticateUserController.handle);
router.post('/compliments', ensureAuthenticate, createComplimentController.handle);
router.get('/users/compliments/send', ensureAuthenticate, listUserSendComplimentsController.handle);
router.get('/users/compliments/receive', ensureAuthenticate, listUserReceiveComplimentsController.handle);
router.get('/tags', ensureAuthenticate, listTagsController.handle);
router.get('/users', ensureAuthenticate, listUsersController.handle);
export { router }