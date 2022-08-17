import { expect } from 'chai';
import * as sinon from 'sinon';
import CarModel from '../../../models/Cars';
import CarService from '../../../services/Car';
import {
	carMockCreate, 
    carMockWithId, 
    allCarsMockWithId, 
    carMockBodyUpdate, 
    carMockResponseUpdate,
} from '../mocks/carMock';

describe('Car Service', () => {
	const carModel = new CarModel();
	const carService = new CarService(carModel);

	before(() => {
		sinon.stub(carModel, 'create').resolves(carMockWithId);

	})
	after(() => {
		sinon.restore()
	})
	describe('Create car Service', () => {
		it('Success create car', async () => {
			const carCreated = await carService.create(carMockCreate);

			expect(carCreated).to.be.deep.equal(carMockWithId);
		});

	});
});