import { Test, TestingModule } from '@nestjs/testing';
import { ReconhecimentoController } from './reconhecimento.controller';
import { ReconhecimentoService } from './reconhecimento.service';
import { NotFoundException } from '@nestjs/common';
import { CreateReconhecimentoDto } from './dto/create-reconhecimento.dto';

describe('ReconhecimentoController', () => {
  let controller: ReconhecimentoController;
  let service: ReconhecimentoService;

  const mockReconhecimento = {
    "id": 1,
    "from": "Beltrano",
    "to": "Ciclano",
    "message": "Excelente trabalho na entrega do projeto, sua dedicação fez toda a diferença!",
    "coins": 10
  };

  const mockService = {
    create: jest.fn().mockResolvedValue(mockReconhecimento),
    findAll: jest.fn().mockResolvedValue([mockReconhecimento]),
    findById: jest.fn().mockImplementation(id => {
      if(id === 1) return Promise.resolve(mockReconhecimento);
      throw new NotFoundException();
    }),
    remove: jest.fn().mockResolvedValue(mockReconhecimento),
  };
  
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReconhecimentoController],
      providers: [
        {
          provide: ReconhecimentoService,
          useValue: mockService,
        }, 
      ],
    }).compile();

    controller = module.get<ReconhecimentoController>(ReconhecimentoController);
    service = module.get<ReconhecimentoService>(ReconhecimentoService);
  });

  it('deve cadastrar um reconhecimento', async () => {
    const dto: CreateReconhecimentoDto = {
      "id": 1,
      "from": "Beltrano",
      "to": "Ciclano",
      "message": "Excelente trabalho na entrega do projeto, sua dedicação fez toda a diferença!",
      "coins": 1
    };

    const resultado = await controller.create(dto);
    expect(resultado).toEqual(mockReconhecimento);
    expect(service.create).toHaveBeenCalledWith(dto);
  });

  it('deve retornar todos os reconhecimentos', async () => {
    const resultado = await controller.findAll();
    expect(resultado).toEqual([mockReconhecimento]);
    expect(service.findAll).toHaveBeenCalled();
  });

  it('deve retornar um reconhecimento por ID', async () => {
    const result = await controller.findById(1);
    expect(result).toEqual(mockReconhecimento);
    expect(service.findById).toHaveBeenCalledWith(1);
  });

  it('deve remover um reconhecimento por ID', async () => {
    const result = await controller.remove(1);
    expect(result).toEqual(mockReconhecimento);
    expect(service.remove).toHaveBeenCalledWith(1);
  });
});
