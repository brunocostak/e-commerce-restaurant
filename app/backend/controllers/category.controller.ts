import { Request, Response } from "express";
import { CategoryService } from "../services/category.service";

export default class CategoryController {
  private categoryService = new CategoryService();

  async create(req: Request, res: Response) {
    try {
      const category = await this.categoryService.create(req.body);
      res.status(201).json(category);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const categories = await this.categoryService.getAll();
      res.status(200).json(categories);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const category = await this.categoryService.getById(Number(req.params.id));
      res.status(200).json(category);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async getByName(req: Request, res: Response) {
    try {
      const category = await this.categoryService.getByName(req.params.name);
      res.status(200).json(category);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const category = await this.categoryService.delete(Number(req.params.id));
      res.status(200).json(category);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async update(req: Request, res: Response) {
    try {
      const category = await this.categoryService.update(Number(req.params.id), req.body);
      res.status(200).json(category);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

