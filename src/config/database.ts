import pkg from "@prisma/client";
import dotenv from "dotenv";
dotenv.config();

const { PrismaClient } = pkg;

const client = new PrismaClient();

export default client;