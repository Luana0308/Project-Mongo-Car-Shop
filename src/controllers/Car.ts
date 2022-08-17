import { Request, Response, NextFunction } from 'express';
import { IService } from '../interfaces/IService';
import { ICar } from '../interfaces/ICar';

export default class CarController {
  constructor(private _service: IService<ICar>) { }

  public async create(req: Request, res: Response<ICar>, next: NextFunction) {
    try {
      const results = await this._service.create(req.body);
      return res.status(201).json(results); 
    } catch (error) {
      return next(error);
    }
  }

  public async read(req: Request, res: Response<ICar[]>) {
    const results = await this._service.read();
    return res.status(200).json(results);
  }

  public async readOne(req: Request, res: Response<ICar>) {
    const result = await this._service.readOne(req.params.id);
    if (!result) throw new Error('é null deu erro');
    return res.status(200).json(result);
  }

  public async update(req: Request, res: Response<ICar | null>) {
    const result = await this._service.update(req.params.id, req.body);
    return res.status(201).json(result);
  }

  public async delete(req: Request, res: Response<ICar | null>) {
    const result = await this._service.delete(req.params.id);
    return res.status(201).json(result);
  }
}