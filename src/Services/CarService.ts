import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

export default class CarService {
  private createCarDomain(carData: ICar | null): Car | null {
    if (carData) {
      const { id, model, year, color, status, buyValue, doorsQty, seatsQty } = carData;
      return new Car({ id, model, year, color, status, buyValue, doorsQty, seatsQty });
    }
    return null;
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
    const carODM = new CarODM();
    const car = await carODM.getById(id);
    return this.createCarDomain(car);
  }
} 