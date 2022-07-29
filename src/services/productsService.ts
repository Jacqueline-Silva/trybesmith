import IProduct from '../interfaces/productsInterface';
import connection from '../models/connection';
import ProductsModel from '../models/productsModel';

export default class ProductsServices {
  public model: ProductsModel;

  constructor() {
    this.model = new ProductsModel(connection);
  }

  public async getAllProducts(): Promise<IProduct[]> {
    return this.model.getAllProducts();
  }

  public async createProduct(name: string, amount: string): Promise<IProduct> {
    return this.model.createProducts(name, amount);
  }
}