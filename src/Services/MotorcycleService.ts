// import { isValidObjectId } from 'mongoose';
import MotorcycleODM from '../Models/MotorcycleODM';
import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';

// import ErrorWithStatus from '../Middlewares/ErrorWithStatus';
// import ErrorTypes from '../Utils/ErrorCode';

export default class MotorcycleService {
  private createMotorcycleDomain(motorcycleData: IMotorcycle | null): Motorcycle | null {
    if (motorcycleData) {
      const { id, model, year, color, status, buyValue, category, engineCapacity } = motorcycleData;
      return new Motorcycle({ id, model, year, color, status, buyValue, category, engineCapacity });
    }
    return null;
  }

  // private validateId(id: string): void {
  //   if (!isValidObjectId(id)) {
  //     throw new ErrorWithStatus('Invalid mongo id', ErrorTypes.INVALID_VALUE);
  //   }
  // }

  // private notFound(): void {
  //   throw new ErrorWithStatus('Car not found', ErrorTypes.NOT_FOUND);
  // }

  public async create(data: IMotorcycle) {
    const motorcycleODM = new MotorcycleODM();
    const newMotorcycle = await motorcycleODM.create(data);
    return this.createMotorcycleDomain(newMotorcycle);
  }
}