import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';

// routers
import { appointmentsRouter } from './routes/appointments.routes';
import { daysRouter } from './routes/days.routes';
import { interviewersRouter } from './routes/interviewers.routes';

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

// days
app.use('/days', daysRouter);

// index
app.use('/interviewers', interviewersRouter);

app.use(errorHandler);
