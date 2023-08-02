import { Request, Response } from "express";

import FoodService from "../services/food.service";

export default class FoodController {
  private foodService = new FoodService();

  async create(req: Request, res: Response) {
    try {
      const food = await this.foodService.create(req.body);
      res.status(201).json(food);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  
  async getAll(req: Request, res: Response) {
    try {
      const food = await this.foodService.getAll();
      res.status(200).json(food);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const food = await this.foodService.getById(Number(req.params.id));
      res.status(200).json(food);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async getByName(req: Request, res: Response) {
    try {
      const food = await this.foodService.getByName(req.params.name);
      res.status(200).json(food);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const food = await this.foodService.delete(Number(req.params.id));
      res.status(200).json(food);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  async update(req: Request, res: Response) {
    try {
      const food = await this.foodService.update(Number(req.params.id), req.body);
      res.status(200).json(food);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}