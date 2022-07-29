import IUsers from '../interfaces/usersInterfaces';
import connection from '../models/connection';
import UsersModel from '../models/usersModel';

export default class UserService {
  public model: UsersModel;

  constructor() {
    this.model = new UsersModel(connection);
  }

  public async createUsers(data: IUsers): Promise<string> {
    return this.model.createUsers(data);
  }
}