import { Request, Response, NextFunction } from 'express';
import ErrorWithStatus from './ErrorWithStatus';

export default class ErrorHandler {
  static Handle(
    error: ErrorWithStatus,
    _req: Request,
    res: Response,
    next: NextFunction,
  ) {
    res.status(error.status || 500).json({ message: error.message });
    next();
  }
}