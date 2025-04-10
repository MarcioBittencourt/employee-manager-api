import { Test, TestingModule } from '@nestjs/testing';
import { ReconhecimentoController } from './reconhecimento.controller';
import { ReconhecimentoService } from './reconhecimento.service';
import { ReconhecimentoRepository } from './reconhecimento.repository';
import { NotFoundException } from '@nestjs/common';

describe('ReconhecimentoController', () => {
  let controller: ReconhecimentoController;
  let service: ReconhecimentoService;

  const mockService = {
    create: jest.fn(dto => ( { id: 1, ...dto})),
    findAll: jest.fn(() => [
      {
        "uuid": "1",
        "id": 1,
        "from": "Beltrano",
        "to": "Ciclano",
        "message": "Excelente trabalho na entrega do projeto, sua dedicação fez toda a diferença!",
        "coins": 1
      }
    ]),
    findById: jest.fn(id => {
      if(id === 1) {
        return {
          "uuid": "1",
          "id": 1,
          "from": "Beltrano",
          "to": "Ciclano",
          "message": "Excelente trabalho na entrega do projeto, sua dedicação fez toda a diferença!",
          "coins": 1
        }
      }
      throw new NotFoundException();
    }),
    remove: jest.fn(id => {
      if(id === 1) {
        return {
          "uuid": "1",
          "id": 1,
          "from": "Beltrano",
          "to": "Ciclano",
          "message": "Excelente trabalho na entrega do projeto, sua dedicação fez toda a diferença!",
          "coins": 1
        }
      }
      throw new NotFoundException();
    }),
  };
  
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReconhecimentoController],
      providers: [
        {
          provide: ReconhecimentoService,
          useValue: mockService,
        }, 
        ReconhecimentoRepository
        ],
      
    }).compile();

    controller = module.get<ReconhecimentoController>(ReconhecimentoController);
    service = module.get<ReconhecimentoService>(ReconhecimentoService);
  });

  it('deve cadastrar um reconhecimento', async () => {
    const reconhecimento = {
      "uuid": "1",
      "id": 1,
      "from": "Beltrano",
      "to": "Ciclano",
      "message": "Excelente trabalho na entrega do projeto, sua dedicação fez toda a diferença!",
      "coins": 1
    };

    const resultado = await controller.create(reconhecimento);

    expect(resultado).toEqual({
      "uuid": "1",
      "id": 1,
      "from": "Beltrano",
      "to": "Ciclano",
      "message": "Excelente trabalho na entrega do projeto, sua dedicação fez toda a diferença!",
      "coins": 1
    });
    expect(service.create).toHaveBeenCalledWith(reconhecimento);
  });

  it('deve retornar todos os reconhecimentos', () => {
    const resultado = controller.findAll();
    expect(resultado).toEqual([
      {
        "uuid": "1",
        "id": 1,
        "from": "Beltrano",
        "to": "Ciclano",
        "message": "Excelente trabalho na entrega do projeto, sua dedicação fez toda a diferença!",
        "coins": 1
      },
    ]);
    expect(service.findAll).toHaveBeenCalled();
  });

  it('deve retornar um reconhecimento por ID', () => {
    const result = controller.findById(1);
    expect(result).toEqual({
      "uuid": "1",
      "id": 1,
      "from": "Beltrano",
      "to": "Ciclano",
      "message": "Excelente trabalho na entrega do projeto, sua dedicação fez toda a diferença!",
      "coins": 1
    });
    expect(service.findById).toHaveBeenCalledWith(1);
  });

  it('deve remover um reconhecimento por ID', () => {
    const result = controller.remove(1);
    expect(result).toEqual({
      "uuid": "1",
      "id": 1,
      "from": "Beltrano",
      "to": "Ciclano",
      "message": "Excelente trabalho na entrega do projeto, sua dedicação fez toda a diferença!",
      "coins": 1
    });
    expect(service.remove).toHaveBeenCalledWith(1);
  });
});
