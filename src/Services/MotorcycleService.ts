import { isValidObjectId } from 'mongoose';
import MotorcycleODM from '../Models/MotorcycleODM';
import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';

import ErrorWithStatus from '../Middlewares/ErrorWithStatus';
import STATUS from '../Utils/StatusCode';

export default class MotorcycleService {
  private createMotorcycleDomain(motorcycleData: IMotorcycle | null): Motorcycle | null {
    if (motorcycleData) {
      const { id, model, year, color, status, buyValue, category, engineCapacity } = motorcycleData;
      return new Motorcycle({ id, model, year, color, status, buyValue, category, engineCapacity });
    }
    return null;
  }

  private validateId(id: string): void {
    if (!isValidObjectId(id)) {
      throw new ErrorWithStatus('Invalid mongo id', STATUS.INVALID_VALUE);
    }
  }

  private notFound(): void {
    throw new ErrorWithStatus('Motorcycle not found', STATUS.NOT_FOUND);
  }

  public async create(data: IMotorcycle) {
    const motorcycleODM = new MotorcycleODM();
    const newMotorcycle = await motorcycleODM.create(data);
    return this.createMotorcycleDomain(newMotorcycle);
  }

  public async getAll() {
    const motorcycleODM = new MotorcycleODM();
    const motorcycleList = await motorcycleODM.getAll();
    return motorcycleList.map((motorcycle) => this.createMotorcycleDomain(motorcycle));
  }

  public async getById(id: string) {
    this.validateId(id);

    const motorcycleODM = new MotorcycleODM();
    const motorcycleFiltered = await motorcycleODM.getById(id);
    if (motorcycleFiltered) {
      return this.createMotorcycleDomain(motorcycleFiltered);
    }

    this.notFound();
  }

  public async update(id: string, motorcycleData: IMotorcycle) {
    this.validateId(id);

    const motorcycleODM = new MotorcycleODM();
    const motorcycleUpdated = await motorcycleODM.update(id, motorcycleData);
    if (motorcycleUpdated) {
      return this.createMotorcycleDomain(motorcycleUpdated);
    }

    this.notFound();
  }
}