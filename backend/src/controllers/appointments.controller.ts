import { Request, Response } from 'express';

import appointments from '../models/appointments.model';
import { Appointment } from '@prisma/client';

/**
 *
 * @param req
 * @param res
 * @returns {void}
 */
const getAppointmentsWithDayId = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    // get all of the dayIds from the query string
    const dayIds = typeof req.query.dayIds === 'string' ? req.query.dayIds : '';

    //parse the dayIds into an array of numbers
    const dayIdsArray = dayIds.split(',').map(Number);

    // pass the dayIdsArray to db and get the list of appointments
    const appointmentsWithDayId =
      await appointments.findManyWithDayId(dayIdsArray);
    // send the response
    res.status(200).json({ appointments: appointmentsWithDayId });
  } catch (err) {
    if (err instanceof Error) res.status(500).json({ message: err.message });
  }
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
  getAppointmentsWithDayId,
  createInterview,
  updateInterview,
  deleteInterview,
};
