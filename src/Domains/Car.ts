import Vehicle from './Vehicle';
import ICar from '../Interfaces/ICar';

export default class Car extends Vehicle {
  private doorsQty: number;
  private seatsQty: number;

  constructor(car: ICar) {
    super(car);
    
    this.doorsQty = car.doorsQty;
    this.seatsQty = car.seatsQty;
  }

  public getDoorsQty() {
    return this.doorsQty;
  }

  public getSeatsQty() {
    return this.seatsQty;
  }
}