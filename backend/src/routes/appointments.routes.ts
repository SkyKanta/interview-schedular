import { Router } from 'express';
import controller from '../controllers/appointments.controller';
export const appointmentsRouter = Router();

appointmentsRouter.get('/', controller.getAppointmentsWithDayId);
