import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';

import STATUS from '../Utils/StatusCode';

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
      return this.res.status(STATUS.CREATED).json(newCar);
    } catch (error) {
      this.next(error);
    }
  }

  public async getAll() {
    try {
      const carList = await this.service.getAll();
      return this.res.status(STATUS.OK).json(carList);
    } catch (error) {
      this.next(error);
    }
  }

  public async getById() {
    const { id } = this.req.params;
    try {
      const carFiltered = await this.service.getById(id);
      return this.res.status(STATUS.OK).json(carFiltered);
    } catch (error) {
      this.next(error);
    }
  }

  public async update() {
    const { id } = this.req.params;
    const carData = this.req.body;

    try {
      const carUpdated = await this.service.update(id, carData);
      return this.res.status(STATUS.OK).json(carUpdated);
    } catch (error) {
      this.next(error);
    }
  }
}