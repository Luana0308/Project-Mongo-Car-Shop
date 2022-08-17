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

});