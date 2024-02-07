import { Router } from 'express';
import controller from '../controllers/days.controller';
export const daysRouter = Router();

daysRouter.get('/', controller.getDays);
