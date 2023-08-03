import { PrismaClient } from "@prisma/client";
import ICreateCategory from "../interfaces/ICreateCategory";

const prisma = new PrismaClient();

export class CategoryService {
  async create(data: ICreateCategory) {
    const category = await prisma.category.create({
      data: {
        name: data.name,
      },
    });
    return category;
  }

  async getAll() {
    const categories = await prisma.category.findMany();
    return categories;
  }

  async getById(id: number) {
    const category = await prisma.category.findUnique({
      where: {
        id,
      },
    });
    return category;
  }

  async getByName(name: string) {
    const category = await prisma.category.findMany({
      where: {
        name,
      },
    });
    return category;
  }

  async delete(id: number) {
    const category = await prisma.category.delete({
      where: {
        id,
      },
    });
    return category;
  }

  async update(id: number, data: ICreateCategory) {
    const category = await prisma.category.update({
      where: {
        id,
      },
      data: {
        name: data.name,
      },
    });
    return category;
  }
}