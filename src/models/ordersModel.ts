import { Pool } from 'mysql2/promise';
import IOrders from '../interfaces/ordersInterface';

export default class OrdersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getOrders(): Promise<IOrders[]> {
    const query = `
      SELECT o.id, o.userId, JSON_ARRAYAGG(p.id) AS productsIds
      FROM Trybesmith.Products AS p
      INNER JOIN Trybesmith.Orders AS o ON o.id = p.orderId
      GROUP BY o.id
      ORDER BY o.userId;
      `;
    const [result] = await this.connection.execute(query);
    return result as IOrders[];
  }
}
