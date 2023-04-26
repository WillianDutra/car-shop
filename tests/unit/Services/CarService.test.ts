import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';

import CarService from '../../../src/Services/CarService';
import { inputValue, carId, carList, carWithId, deleteOutput } from './CarServices.mock';

describe('Testa a camada Service de Car', function () {
  describe('Casos de SUCESSO', function () {
    it('Consegue cadastrar um carro', async function () {
      // Arrange
      sinon.stub(Model, 'create').resolves(carWithId);
      // Act
      const service = new CarService();
      const result = await service.create(inputValue);
      // Assert
      expect(result).to.be.deep.equal(carWithId);
    });

    it('Consegue fazer uma consulta por todos os carros', async function () {
      // Arrange
      sinon.stub(Model, 'find').resolves(carList);
      // Act
      const service = new CarService();
      const result = await service.getAll();
      // Assert
      expect(result).to.be.deep.equal(carList);
    });

    it('Consegue fazer uma consulta pelo ID do carro', async function () {
      // Arrange
      sinon.stub(Model, 'findOne').resolves(carWithId);
      // Act
      const service = new CarService();
      const result = await service.getById(carId.id);
      // Assert
      expect(result).to.be.deep.equal(carWithId);
    });

    it('Consegue fazer um update de um carro', async function () {
      // Arrange
      sinon.stub(Model, 'findByIdAndUpdate').resolves(carWithId);
      // Act
      const service = new CarService();
      const result = await service.update(carId.id, inputValue);
      // Assert
      expect(result).to.be.deep.equal(carWithId);
    });

    it('Consegue deletar um carro cadastrado', async function () {
      // Arrange
      sinon.stub(Model, 'deleteOne').resolves({ ...deleteOutput });
      // Act
      const service = new CarService();
      const result = await service.delete(carId.id);
      // Assert
      expect(result).to.be.deep.equal(null);
    });
  });

  describe('Casos de ERRO', function () {
    it('Retornar erro quando ID for invalido', async function () {
      // Arrange
      sinon.stub(Model, 'findOne').resolves({});
      
      try {
        // Act
        const service = new CarService();
        await service.getById('INVALID_ID');
      } catch ({ message }) {
        // Assert
        expect(message).to.be.deep.equal('Invalid mongo id');
      }
    });

    it('Retorna erro quando nenhum carro foi encontrado', async function () {
      // Arrange
      sinon.stub(Model, 'findOne').resolves({});
      
      try {
        // Act
        const service = new CarService();
        await service.getById(carId.id);
      } catch ({ message }) {
        // Assert
        expect(message).to.be.deep.equal('Car not found');
      }
    });
  });

  afterEach(function () {
    sinon.restore();
  });
});