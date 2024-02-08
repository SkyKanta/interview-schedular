import { Router } from 'express';
import controller from '../controllers/interviews.controller';

export const interviewsRouter = Router();

interviewsRouter.post('/', controller.createInterview);

interviewsRouter.put('/:id', controller.updateInterview);

interviewsRouter.delete('/:id', controller.deleteInterview);
