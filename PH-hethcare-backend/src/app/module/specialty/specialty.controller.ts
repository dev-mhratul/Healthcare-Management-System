import { NextFunction, Request, RequestHandler, Response } from "express";
import { SpecialtyService } from "./specialty.service";
import { catchAsync } from "../../shared/catchAsync";
import { sendResponse } from "../../shared/sendResponse";




const createSpecialty = catchAsync(
  async (req: Request, res: Response) => {
    const payload = req.body;
    const result = await SpecialtyService.createSpecialty(payload);
    sendResponse(res, {
      httpStatuscode: 201,
      success:true,
      message: "specialty created successsfully",
      data: result
    })
  }
)

// get All specialty
const getAllSpecialties = catchAsync(
  async (req: Request, res: Response) => {
    const result = await SpecialtyService.getAllSpecialties();
    res.status(200).json({
      success: true,
      message: "Specialties fetched successfully",
      data: result
    });
  }
)

// delete a specialty
const deleteSpecialty = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await SpecialtyService.deleteSpecialty(id as string)
    res.status(200).json({
      success: true,
      message: "Specialty deleted successfully",
      data: result
    });

  }
)

// update specialty
const updateSpecialty = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const payload = req.body;

    const result = await SpecialtyService.updateSpecialty(id as string, payload);

    res.status(200).json({
      success: true,
      message: "Specialty updated successfully",
      data: result
    })
  }
)

export const SpecialtyController = {
  createSpecialty,
  getAllSpecialties,
  deleteSpecialty,
  updateSpecialty
}