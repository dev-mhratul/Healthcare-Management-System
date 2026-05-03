import { Request, Response } from "express";
import { SpecialtyService } from "./specialty.service";


// create a specialty
const createSpecialty = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const result = await SpecialtyService.createSpecialty(payload);

    res.status(201).json({
      success: true,
      message: "Specialty created successfully",
      data: result
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error?.message || "Something went wrong",
      error: error
    });
  }
}

// get All specialty
const getAllSpecialties = async (req: Request, res: Response) => {
  try {
    const result = await SpecialtyService.getAllSpecialties();

    res.status(200).json({
      success: true,
      message: "Specialties fetched successfully",
      data: result
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error?.message || "Something went wrong",
      error: error
    });
  }
}

// delete a specialty
const deleteSpecialty = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await SpecialtyService.deleteSpecialty(id as string);

    res.status(200).json({
      success: true,
      message: "Specialty deleted successfully",
      data: result
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error?.message || "Something went wrong",
      error: error
    });
  }
}

// update a specialty
const updateSpecialty = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const payload = req.body;
    const result = await SpecialtyService.updateSpecialty(id as string, payload);

    res.status(200).json({
      success: true,
      message: "Specialty updated successfully",
      data: result
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error?.message || "Something went wrong",
      error: error
    });
  }
}

export const SpecialtyController = {
  createSpecialty,
  getAllSpecialties,
  deleteSpecialty,
  updateSpecialty
}