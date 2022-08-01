import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import OrdersServices from '../services/ordersService';

export default class OrdersController {
  constructor(private ordersService = new OrdersServices()) { }

  public getOrders = async (_req: Request, res: Response) => {
    const result = await this.ordersService.getOrders();
    
    res.status(StatusCodes.OK).json(result);
  };
}