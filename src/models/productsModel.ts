import { Pool, ResultSetHeader } from 'mysql2/promise';
import IProduct from '../interfaces/productsInterface';

export default class ProductsModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async createProducts(name: string, amount: string): Promise<IProduct> {
    const query = `
      INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?);`;
    const [result] = await this.connection.execute<ResultSetHeader>(query, [name, amount]);

    return { id: result.insertId, name, amount };
  }
}