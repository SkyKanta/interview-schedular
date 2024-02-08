import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

// routers
import { appointmentsRouter } from './routes/appointments.routes';
import { daysRouter } from './routes/days.routes';
import { interviewersRouter } from './routes/interviewers.routes';
import { interviewsRouter } from './routes/interviews.routes';

//  middleware
import { errorHandler } from './middleware/errorHandler.middleware';

// lib
import { corsOptions } from './lib/cors';

// dotenv
dotenv.config();

export const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors(corsOptions));

// routers
// appointments
app.use('/appointments', appointmentsRouter);

// interviews
app.use('/interviews', interviewsRouter);

// days
app.use('/days', daysRouter);

// interviewers
app.use('/interviewers', interviewersRouter);

app.use(errorHandler);
