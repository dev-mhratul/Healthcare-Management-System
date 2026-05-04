import { Response } from "express";

interface IresponseData<T>{
  httpStatuscode: number;
  success: boolean;
  message: string;
  data?: T;
}

export const sendResponse = <T>(res: Response, responseData: IresponseData<T>) => {
  const {httpStatuscode, success, message, data}= responseData;

  res.status(httpStatuscode).json({
    success,
    message, 
    data
  })
}