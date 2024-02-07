import { Router } from 'express';
import controller from '../controllers/appointments.controller';
const router = Router();

router.get('/appointments', controller.getAppointments);
router.post(
  '/appointments/:appointmentId/interview',
  controller.createInterview
);
router.put(
  '/appointments/:appointmentId/interview',
  controller.updateInterview
);
router.delete(
  '/appointments/:appointmentId/interview',
  controller.deleteInterview
);

export default router;
