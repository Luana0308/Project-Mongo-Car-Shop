import { expect } from 'chai';
import sinon from 'sinon';
import CarsModel from '../../../models/Cars';
import { Model } from 'mongoose';
import {
	carMockCreate, 
    carMockWithId, 
    allCarsMockWithId, 
    carMockBodyUpdate, 
    carMockResponseUpdate,
} from '../mocks/carMock';

describe('Car Model', () => {
	const carsModel = new CarsModel();

	before(() => {
		sinon.stub(Model, 'create').resolves(carMockWithId);
	});

	after(() => {
		sinon.restore();
	});

	describe('creating a car', () => {
		it('successfully created a car', async () => {
			const newCar = await carsModel.create(carMockCreate);
			expect(newCar).to.be.deep.equal(carMockWithId);
		});
	});
});