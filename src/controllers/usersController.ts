import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import UserService from '../services/usersService';

export default class UsersController {
  constructor(private usersServices = new UserService()) { }

  public createUser = async (req: Request, res: Response) => {
    const data = req.body;

    const token = await this.usersServices.createUsers(data);

    res.status(StatusCodes.CREATED).json({ token });
  };
}