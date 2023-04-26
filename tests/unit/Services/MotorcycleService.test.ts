import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';

import MotorcycleService from '../../../src/Services/MotorcycleService';
import {
  inputValue, motorcycleId, motorcycleList, motorcycleWithId, deleteOutput,
} from './MotorcycleService.mock';

describe('Testa a camada Service de Motorcycle', function () {
  describe('Casos de SUCESSO', function () {
    it('Consegue cadastrar uma motocicleta', async function () {
      // Arrange
      sinon.stub(Model, 'create').resolves(motorcycleWithId);
      // Act
      const service = new MotorcycleService();
      const result = await service.create(inputValue);
      // Assert
      expect(result).to.be.deep.equal(motorcycleWithId);
    });

    it('Consegue fazer uma consulta por todas as motocicletas', async function () {
      // Arrange
      sinon.stub(Model, 'find').resolves(motorcycleList);
      // Act
      const service = new MotorcycleService();
      const result = await service.getAll();
      // Assert
      expect(result).to.be.deep.equal(motorcycleList);
    });

    it('Consegue fazer uma consulta pelo ID da motocicleta', async function () {
      // Arrange
      sinon.stub(Model, 'findOne').resolves(motorcycleWithId);
      // Act
      const service = new MotorcycleService();
      const result = await service.getById(motorcycleId.id);
      // Assert
      expect(result).to.be.deep.equal(motorcycleWithId);
    });

    it('Consegue fazer um update de uma motocicleta', async function () {
      // Arrange
      sinon.stub(Model, 'findByIdAndUpdate').resolves(motorcycleWithId);
      // Act
      const service = new MotorcycleService();
      const result = await service.update(motorcycleId.id, inputValue);
      // Assert
      expect(result).to.be.deep.equal(motorcycleWithId);
    });

    it('Consegue deletar uma motocicleta cadastrada', async function () {
      // Arrange
      sinon.stub(Model, 'deleteOne').resolves({ ...deleteOutput });
      // Act
      const service = new MotorcycleService();
      const result = await service.delete(motorcycleId.id);
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
        const service = new MotorcycleService();
        await service.getById('INVALID_ID');
      } catch ({ message }) {
        // Assert
        expect(message).to.be.deep.equal('Invalid mongo id');
      }
    });

    it('Retorna erro quando nenhum motocicleta foi encontrada', async function () {
      // Arrange
      sinon.stub(Model, 'findOne').resolves({});
      
      try {
        // Act
        const service = new MotorcycleService();
        await service.getById(motorcycleId.id);
      } catch ({ message }) {
        // Assert
        expect(message).to.be.deep.equal('Motorcycle not found');
      }
    });
  });

  afterEach(function () {
    sinon.restore();
  });
});
