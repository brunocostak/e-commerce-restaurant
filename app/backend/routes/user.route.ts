import { Request, Response, Router } from "express";
import UserController from "../controllers/user.controller";

const userController = new UserController();

const router = Router();

router.post('/login', (req: Request, res: Response) => {
  userController.login(req, res);
});

router.post('/register', (req: Request, res: Response) => {
  userController.register(req, res);
});

export default router;