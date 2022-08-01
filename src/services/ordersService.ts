import IOrders from '../interfaces/ordersInterface';
import connection from '../models/connection';
import OrdersModel from '../models/ordersModel';

export default class OrdersServices {
  public model: OrdersModel;

  constructor() {
    this.model = new OrdersModel(connection);
  }

  public async getOrders(): Promise<IOrders[]> {
    return this.model.getOrders();
  }
}