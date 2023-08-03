import { Request, Response, Router } from "express";
import FoodController from "../controllers/food.controller";

const foodController = new FoodController();

const router = Router();

router.post('/create', (req: Request, res: Response) => {
  foodController.create(req, res);
});

router.get('/', (req: Request, res: Response) => {
  foodController.getAll(req, res);
});

router.get('/:id', (req: Request, res: Response) => {
  foodController.getById(req, res);
});

router.get('/name/:name', (req: Request, res: Response) => {
  foodController.getByName(req, res);
});

router.delete('/:id', (req: Request, res: Response) => {
  foodController.delete(req, res);
});

router.put('/:id', (req: Request, res: Response) => {
  foodController.update(req, res);
});

export default router;