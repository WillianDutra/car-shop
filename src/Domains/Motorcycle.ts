import IMotorcycle from '../Interfaces/IMotorcycle';

export default class Car {
  protected id: string | undefined;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status: boolean | undefined;
  protected buyValue: number;
  private category: string;
  private engineCapacity: number;

  constructor(motorcycle: IMotorcycle) {
    this.id = motorcycle.id;
    this.model = motorcycle.model;
    this.year = motorcycle.year;
    this.color = motorcycle.color;
    this.status = motorcycle.status;
    this.buyValue = motorcycle.buyValue;
    this.category = motorcycle.category;
    this.engineCapacity = motorcycle.engineCapacity;
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

  public getCategory() {
    return this.category;
  }

  public getEngineCapacity() {
    return this.engineCapacity;
  }
}