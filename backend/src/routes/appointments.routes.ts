import { Router } from 'express';
import controller from '../controllers/appointments.controller';
export const appointmentsRouter = Router();

appointmentsRouter.get('/', controller.getAppointmentsWithDayId);
appointmentsRouter.post(
  '/:appointmentId/interview',
  controller.createInterview
);
appointmentsRouter.put('/:appointmentId/interview', controller.updateInterview);
appointmentsRouter.delete(
  '/:appointmentId/interview',
  controller.deleteInterview
);
