import { number } from "joi";
import prisma from "../config/database.js";

async function getCars() {
  const data = prisma.cars.findMany();
  return data;
}

async function getCar(id: number) {
  const data = prisma.cars.findUnique({
    where: {
      id: id
    }
  });
  return data;
}

async function getCarWithLicensePlate(licensePlate: string) {
  const data = prisma.cars.findUnique({
    where: {
      licensePlate: licensePlate
    }
  })
  return data;
}

async function createCar(model: string, licensePlate: string, year: number, color: string){
  const result = prisma.cars.create({
    data: {
      model: model,
      licensePlate: licensePlate,
      year: ""+year,
      color: color
    }
  });
  console.log(result);
  return result;
}

async function upsertCar(id: number, model: string, licensePlate: string, year: number, color: string){
  const result = prisma.cars.upsert({
    where: {
      id: id
    },
    create: {
      model: model,
      licensePlate: licensePlate,
      year: ""+year,
      color: color
    },
    update: {
      model: model,
      color: color,
      year: ""+year
    }
  });
  console.log(result);
  
  return result;
}



async function deleteCar(id: number) {
  return prisma.cars.delete({
    where: {
      id: id
    }
  })
}

const carRepository = {
  getCar,
  getCarWithLicensePlate,
  getCars,
  createCar,
  deleteCar,
  upsertCar
}

export default carRepository;