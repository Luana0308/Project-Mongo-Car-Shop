import { expect } from 'chai';
import * as sinon from 'sinon';
import { NextFunction, Request, Response } from 'express';
import CarModel from '../../../models/Cars';
import CarService from '../../../services/Car';
import CarController from '../../../controllers/Car'
import {
	carMockCreate, 
    carMockWithId, 
    allCarsMockWithId, 
    carMockBodyUpdate, 
    carMockResponseUpdate,
} from '../mocks/carMock';


describe('Car Controller', () => {
  const carModel = new CarModel()
  const carService = new CarService(carModel);
  const carController = new CarController(carService);

  const req = {} as Request; 
  const res = {} as Response;
  const next = {} as NextFunction

  before(() => {
    sinon.stub(carService, 'create').resolves(carMockWithId);
    sinon.stub(carService, 'read').resolves(allCarsMockWithId);
    sinon.stub(carService, 'readOne').resolves(carMockWithId);

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns(res);
  });

  after(() => {
    sinon.restore()
  })

  describe('Create car Controller', () => {
    it('Success create car', async () => {
      req.body = carMockCreate;
      await carController.create(req, res, next);
      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carMockWithId)).to.be.true;
    });
  });

  describe('Read all cars Controller', () => {
    it('Success read all cars', async () => {
      await carController.read(req, res);
      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(allCarsMockWithId)).to.be.true;
    });
  });

  describe('Read car Controller', () => {
    it('Success read a car', async () => {
      req.params = { id: carMockWithId._id };
      await carController.readOne(req, res, next);
      expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(carMockWithId)).to.be.true;
    });
  });

});