import dotenv from 'dotenv';
import express from 'express';
import morgan from 'morgan';

//  middleware
import { errorHandler } from './middleware/errorHandler.middleware';

// dotenv
dotenv.config();

export const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(morgan('dev'));

// routers

app.use('/');

app.use(errorHandler);
