import { NextFunction, Request, Response } from 'express';

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err) {
    res.render('error', { error: err.message, currentUser: null, page: null });
  }
  next();
};
