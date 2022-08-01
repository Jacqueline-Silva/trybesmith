import { Router } from 'express';
import OrdersController from '../controllers/ordersController';

const ordersRoute = Router();

const ordersController = new OrdersController();

ordersRoute.get('/', ordersController.getOrders);

export default ordersRoute;