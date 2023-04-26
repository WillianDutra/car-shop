import { Model, model, models, Schema, UpdateQuery } from 'mongoose';
import IDeleteResult from '../Interfaces/IDeleteResult';

export default abstract class AbstractODM<T> {
  protected model: Model<T>;
  protected schema: Schema;
  protected modelName: string;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  public async create(obj: T): Promise<T> {
    return this.model.create({ ...obj });
  }

  public async getAll(): Promise<T[]> {
    return this.model.find();
  }

  public async getById(id: string): Promise<T | null> {
    return this.model.findOne({ _id: id });
  }

  public async update(id: string, data: T): Promise<T | null> {
    return this.model.findByIdAndUpdate({ _id: id }, { ...data } as UpdateQuery<T>, { new: true });
  }

  public async delete(id: string): Promise<IDeleteResult> {
    return this.model.deleteOne({ _id: id });
  }
}