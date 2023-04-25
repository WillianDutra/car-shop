import { NextFunction, Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';

import ErrorWithStatus from '../Middlewares/ErrorWithStatus';
import ErrorTypes from '../Utils/ErrorCode';

export default class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  public async create() {
    const { model, year, color, status, buyValue, doorsQty, seatsQty } = this.req.body;
    const car: ICar = { model, year, color, status, buyValue, doorsQty, seatsQty };

    try {
      const newCar = await this.service.create(car);
      return this.res.status(201).json(newCar);
    } catch (error) {
      this.next(error);
    }
  }

  public async getAll() {
    try {
      const carList = await this.service.getAll();
      return this.res.status(200).json(carList);
    } catch (error) {
      this.next(error);
    }
  }

  public async getById() {
    const { id } = this.req.params;
    try {
      if (!isValidObjectId(id)) {
        throw new ErrorWithStatus('Invalid mongo id', ErrorTypes.INVALID_VALUE);
      }

      const carFiltered = await this.service.getById(id);
      if (carFiltered) return this.res.status(200).json(carFiltered);

      throw new ErrorWithStatus('Car not found', ErrorTypes.NOT_FOUND);
    } catch (error) {
      this.next(error);
    }
  }
}