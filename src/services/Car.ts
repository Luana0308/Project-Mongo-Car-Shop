import { IService } from '../interfaces/IService';
import { ICar, CarZodSchema } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
import { ErrorTypes } from '../erros/catalog';

class CarService implements IService<ICar> {
  private _car:IModel<ICar>;

  constructor(model:IModel<ICar>) {
    this._car = model;
  }

  public async create(obj:ICar):Promise<ICar> {
    const parsed = CarZodSchema.safeParse(obj);
    if (!parsed.success) {
      throw parsed.error; 
    }
    return this._car.create(obj);
  }

  public async read():Promise<ICar[]> {
    const cars = await this._car.read();
    if (!cars) throw new Error(ErrorTypes.CarNotFound);
    return cars;
  }

  public async readOne(_id:string):Promise<ICar> {
    if (_id.length < 24) throw new Error(ErrorTypes.InvalidMongoId);

    const car = await this._car.readOne(_id);
    if (!car) throw new Error(ErrorTypes.CarNotFound);
    return car;
  }

  public async update(_id:string, obj:ICar):Promise<ICar | null> {
    if (_id.length < 24) throw new Error(ErrorTypes.InvalidMongoId);

    const parsed = CarZodSchema.safeParse(obj);
    if (!parsed.success) { throw parsed.error; }

    const carId = await this.readOne(_id);
    if (!carId) throw new Error(ErrorTypes.CarNotFound);

    return this._car.update(_id, obj);
  }

  public async delete(_id:string):Promise<ICar | null> {
    if (_id.length < 24) throw new Error(ErrorTypes.InvalidMongoId);

    const carId = await this.readOne(_id);
    if (!carId) throw new Error(ErrorTypes.CarNotFound);

    return this._car.delete(_id);
  }
}

export default CarService;