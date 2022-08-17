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
        sinon.stub(Model, 'find').resolves(allCarsMockWithId);
        sinon.stub(Model, 'findOne').resolves(carMockWithId);
        sinon.stub(Model, 'findByIdAndUpdate').resolves(carMockResponseUpdate);
        sinon.stub(Model, 'findByIdAndRemove').resolves(carMockResponseUpdate);
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

    describe('searching all cars', () => {
		it('successfully found all cars', async () => {
			const carsFound = await carsModel.read();
			expect(carsFound).to.be.deep.equal(allCarsMockWithId);
		});
	});

    describe('searching a Car', () => {
		it('successfully found', async () => {
			const carFound = await carsModel.readOne("62fd3403e8f068104275d3ec");
			expect(carFound).to.be.deep.equal(carMockWithId);
		});

        it('_id not found', async () => {
			try {
				await carsModel.readOne('123sjfbfhrgrg');
			} catch (error: any) {
				expect(error.message).to.be.eq('InvalidMongoId');
			}
		});
	});

    describe('changing a car', () => {
		it('successfully changed', async () => {
			const carChanged = await carsModel.update("62fd3403e8f068104275d3ec", carMockBodyUpdate);
			expect(carChanged).to.be.deep.equal(carMockResponseUpdate);
		});
	});

    describe('removing a car', () => {
		it('successfully removed', async () => {
			const carChanged = await carsModel.delete("62fd3403e8f068104275d3ec");
			expect(carChanged).to.be.deep.equal(carMockResponseUpdate);
		});
	});

});