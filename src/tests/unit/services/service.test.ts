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
        sinon.stub(carModel, 'read').resolves(allCarsMockWithId);
        sinon.stub(carModel, 'readOne').resolves(carMockWithId);
        sinon.stub(carModel, 'update').resolves(carMockResponseUpdate);

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

    describe('Read All Cars', () => {
		it('Success find all cars', async () => {
			const cars = await carService.read();
			expect(cars).to.be.deep.equal(allCarsMockWithId);
		});
	});

    describe('Read one car', () => {
		it('successfully found a car', async () => {
			const carFound = await carService.readOne("62fd3403e8f068104275d3ec");
			expect(carFound).to.be.deep.equal(carMockWithId);
		});
    });

    describe('update a car', () => {
		it('successfully update a car', async () => {
			const carChanged = await carService.update("62fd3403e8f068104275d3ec", carMockBodyUpdate);
			expect(carChanged).to.be.deep.equal(carMockResponseUpdate);
		});
	});


});