import { PrismaClient } from "@prisma/client";
import JWT from "../utils/JWT";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export default class UserService {
  async login(email: string, password: string) {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
  
    if (!user) {
      throw new Error("User not found");
    }
  
    const passwordMatch = await bcrypt.compare(password, user.password);
  
    if (!passwordMatch) {
      throw new Error("Invalid password");
    }
  
    const token = JWT.sign({
      id: user.id,
      email: user.email,
    }); 
  
    return token;
  }
  async register(email: string, name:string, password: string) {
    const passwordHash = await bcrypt.hash(password, 16);
    const user = await prisma.user.create({
      data: {
        email: email,
        name: name,
        password: passwordHash,
      },
    });
    return user;
  }
}