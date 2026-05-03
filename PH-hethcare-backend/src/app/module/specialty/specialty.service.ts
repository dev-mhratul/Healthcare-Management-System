import { speciality } from "../../../generated/prisma/client";
import { prisma } from "../../lib/prisma";

const createSpecialty = async (payload: speciality):Promise<speciality> => {
  const speciality = await prisma.speciality.create({
    data:payload
  })
  return speciality; 
}

const getAllSpecialties = async (): Promise<speciality[]> => {
  const specialties = await prisma.speciality.findMany();
  return specialties;
}



const deleteSpecialty = async (id: string) => {
  const specialty = await prisma.speciality.delete({
    where: {
      id
    }
  });
  return specialty;
}

const   updateSpecialty = async (id: string, payload: speciality) => {
  const specialty = await prisma.speciality.update({
    where: {
      id
    },
    data: payload
  });
  return specialty;
}

export const SpecialtyService = {
  createSpecialty,
  getAllSpecialties,
  deleteSpecialty,
  updateSpecialty
}