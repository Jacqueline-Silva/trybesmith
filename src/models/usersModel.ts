import { Pool, ResultSetHeader } from 'mysql2/promise';
import IUsers from '../interfaces/usersInterfaces';
import createToken from '../services/jwtService';

export default class UsersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async createUsers(user: IUsers): Promise<string> {
    const { username, classe, level, password } = user;
    const query = `
      INSERT INTO Trybesmith.Users(username, classe, level, password) VALUES (?, ?, ?, ?);`;
    
    await this.connection
      .execute<ResultSetHeader>(query, [username, classe, level, password]);

    const token = createToken(username, password);
    return token;
  }
}