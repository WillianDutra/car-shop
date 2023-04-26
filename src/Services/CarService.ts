import { isValidObjectId } from 'mongoose';
import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import ErrorWithStatus from '../Middlewares/ErrorWithStatus';
import CarODM from '../Models/CarODM';
import STATUS from '../Utils/StatusCode';

export default class CarService {
  private createCarDomain(carData: ICar | null): Car | null {
    if (carData) {
      const { id, model, year, color, status, buyValue, doorsQty, seatsQty } = carData;
      return new Car({ id, model, year, color, status, buyValue, doorsQty, seatsQty });
    }
    return null;
  }

  private validateId(id: string): void {
    if (!isValidObjectId(id)) {
      throw new ErrorWithStatus('Invalid mongo id', STATUS.INVALID_VALUE);
    }
  }

  private notFound(): void {
    throw new ErrorWithStatus('Car not found', STATUS.NOT_FOUND);
  }

  public async create(data: ICar) {
    const carODM = new CarODM();
    const newCar = await carODM.create(data);
    return this.createCarDomain(newCar);
  }

  public async getAll() {
    const carODM = new CarODM();
    const allCars = await carODM.getAll();
    return allCars.map((car) => this.createCarDomain(car));
  }

  public async getById(id: string) {
    this.validateId(id);
    
    const carODM = new CarODM();
    const car = await carODM.getById(id);
    if (car) {
      return this.createCarDomain(car);
    }

    this.notFound();
  }

  public async update(id: string, carData: ICar) {
    this.validateId(id);

    const carODM = new CarODM();
    const car = await carODM.update(id, carData);
    if (car) {
      return this.createCarDomain(car);
    }

    this.notFound();
  }
} 