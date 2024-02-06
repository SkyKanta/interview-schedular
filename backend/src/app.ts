import dotenv from 'dotenv';
import express from 'express';

//  middleware
import { errorHandler } from './middleware/errorHandler.middleware';

// dotenv
dotenv.config();

export const app = express();

app.use(express.json());
app.use(express.urlencoded());

// routers

app.use('/', (req, res) => {
  res.send('Hello World');
});

app.use(errorHandler);
