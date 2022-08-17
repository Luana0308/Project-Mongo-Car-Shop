import { Router } from 'express';
import CarModel from '../models/Cars';
import CarService from '../services/Car';
import CarController from '../controllers/Car';

const route = Router();

const newCar = new CarModel();
const newCarService = new CarService(newCar);
const newCarController = new CarController(newCarService);

route.post('/cars', (req, res, next) => (newCarController
  .create(req, res, next)));
route.get('/cars', (req, res) => newCarController.read(req, res));
route.get('cars/:id', (req, res) => newCarController.readOne(req, res));
route.put('cars/:id', (req, res) => newCarController.update(req, res));
route.delete('cars/:id', (req, res) => newCarController.delete(req, res));

export default route; 