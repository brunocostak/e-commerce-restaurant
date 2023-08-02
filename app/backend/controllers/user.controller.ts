import { Request, Response } from "express";
import UserService from "../services/user.service";

const userService = new UserService();

export default class UserController {
  async login(req: Request, res: Response) {
    const { email, password } = req.body;

    try {
      const user = await userService.login(email, password);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(400).json(error);
    }
  }

  async register (req: Request, res: Response) {
    const { email, name, password } = req.body;

    try {
      const user = await userService.register(email, name, password);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
}