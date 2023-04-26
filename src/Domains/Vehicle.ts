import IVehicle from '../Interfaces/IVehicle';

export default class Vehicle {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status: boolean | undefined;
  protected buyValue: number;

  constructor(data: IVehicle) {
    this.id = data.id;
    this.model = data.model;
    this.year = data.year;
    this.color = data.color;
    this.status = data.status;
    this.buyValue = data.buyValue;
  }

  public getId() {
    return this.id; 
  }

  public getModel() {
    return this.model;
  }

  public getYear() {
    return this.year;
  }

  public getColor() {
    return this.color;
  }

  public getStatus() {
    return this.status;
  }

  public getBuyValue() {
    return this.buyValue;
  }
}