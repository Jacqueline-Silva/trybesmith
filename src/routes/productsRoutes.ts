import { Router } from 'express';
import ProductsController from '../controllers/productsController';

const productsRoute = Router();

const productsController = new ProductsController();

productsRoute.get('/', productsController.getAllProducts);
productsRoute.post('/', productsController.create);

export default productsRoute;