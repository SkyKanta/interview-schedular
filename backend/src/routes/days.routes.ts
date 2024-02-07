import { Router } from 'express';
import controller from '../controllers/days.controller';
const router = Router();

router.get('/days', controller.getDays);

export default router;
