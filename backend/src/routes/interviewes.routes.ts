import { Router } from 'express';
import controller from '../controllers/interviewers.controller';
const router = Router();

router.get('/appointments', controller.getInterviewers);

export default router;
