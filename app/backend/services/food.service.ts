import { PrismaClient } from "@prisma/client";
import ICreateFood from "../interfaces/ICreateFood";

const prisma = new PrismaClient();

export default class FoodService {
  async create(data: ICreateFood) {
    return await prisma.food.create({
      data:{
        name: data.name,
        description: data.description,
        price: data.price,
        image: data.image,
        categoryId: data.categoryId,
      }
    });
  }

  async getAll() {
    const foods = await prisma.food.findMany({
      include: {
        category: true,
      },
    });
  
    // Remover a propriedade `categoryId` dos objetos retornados.
    const result = foods.map((food) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
      const { categoryId, ...rest } = food;
      return rest;
    });
    return result;
  }

  async getById(id: number) {
    const food = await prisma.food.findUnique({
      where: {
        id: id,
      },
      include: {
        category: true,
      },
    });
    return food;
  }

  async getByName(name: string) {
    const food = await prisma.food.findMany({
      where: {
        name: {
          contains: name,
        }
      },
      include: {
        category: true,
      },
    });
    return food;
  }

  async delete(id: number) {
    const food = await prisma.food.delete({
      where: {
        id: id,
      },
    });
    return food;
  }

  async update(id: number, data: ICreateFood) {
    const food = await prisma.food.update({
      where: {
        id: id,
      },
      data: {
        name: data.name,
        description: data.description,
        price: data.price,
        image: data.image,
        categoryId: data.categoryId,
      },
    });
    return food;
  }
}