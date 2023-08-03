import { Request, Response, Router } from "express";
import CategoryController from "../controllers/category.controller";

const categoryController = new CategoryController();

const router = Router();

router.post('/create', (req: Request, res: Response) => {
  categoryController.create(req, res);
});

router.get('/', (req: Request, res: Response) => {
  categoryController.getAll(req, res);
});

router.get('/:id', (req: Request, res: Response) => {
  categoryController.getById(req, res);
});

router.get('/name/:name', (req: Request, res: Response) => {
  categoryController.getByName(req, res);
});

router.delete('/:id', (req: Request, res: Response) => {
  categoryController.delete(req, res);
});

router.put('/:id', (req: Request, res: Response) => {
  categoryController.update(req, res);
});

export default router;