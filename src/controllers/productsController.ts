import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import ProductsServices from '../services/productsService';

export default class ProductsController {
  constructor(private productsService = new ProductsServices()) { }

  public getAllProducts = async (req: Request, res: Response) => {
    const result = await this.productsService.getAllProducts();
    
    res.status(StatusCodes.OK).json(result);
  };

  public create = async (req: Request, res: Response) => {
    const { name, amount } = req.body;

    const newProduct = await this.productsService.createProduct(name, amount);

    res.status(StatusCodes.CREATED).json(newProduct);
  };
}