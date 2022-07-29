import { Router } from 'express';
import UsersController from '../controllers/usersController';

const usersRoute = Router();

const usersController = new UsersController();

usersRoute.post('/', usersController.createUser);

export default usersRoute;