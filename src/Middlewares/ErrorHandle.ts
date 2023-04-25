import { Request, Response, NextFunction } from 'express';

export default class ErrorHandler {
  static Handle(
    error: Error,
    _req: Request,
    res: Response,
    next: NextFunction,
  ) {
    res.status(500).json({ message: error.message });
    next();
  }
}