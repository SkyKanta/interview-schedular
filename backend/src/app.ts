import dotenv from 'dotenv';
import express from 'express';

// routers

//  middleware
import { errorHandler } from './middleware/errorHandler.middleware';
import { appointmentsRouter } from './routes/appointments.routes';
import { daysRouter } from './routes/days.routes';
import { interviewersRouter } from './routes/interviewers.routes';

// dotenv
dotenv.config();

export const app = express();

app.use(express.json());
app.use(express.urlencoded());

// routers
// appointments
app.use('/appointments', appointmentsRouter);

// days
app.use('/days', daysRouter);

// index
app.use('/interviewers', interviewersRouter);

app.use(errorHandler);
