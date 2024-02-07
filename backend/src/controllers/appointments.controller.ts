import { Request, Response } from 'express';

const getAppointments = (req: Request, res: Response): void => {
  const dayId = req.query.dayId as string;
};

const createInterview = (req: Request, res: Response): void => {
  // Implement  logic to create an interview
};

const updateInterview = (req: Request, res: Response): void => {
  // Implement  logic to update an interview
};

const deleteInterview = (req: Request, res: Response): void => {
  // Implement  logic to delete an interview
};

export default {
  getAppointments,
  createInterview,
  updateInterview,
  deleteInterview,
};
