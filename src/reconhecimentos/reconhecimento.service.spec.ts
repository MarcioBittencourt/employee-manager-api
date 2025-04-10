import { Test, TestingModule } from '@nestjs/testing';
import { ReconhecimentoService } from './reconhecimento.service';
import { Repository } from 'typeorm';
import { Reconhecimento } from './entities/reconhecimento';
import { getRepositoryToken } from '@nestjs/typeorm';

describe('ReconhecimentoService', () => {
  let service: ReconhecimentoService;
  let repo: Repository<Reconhecimento>;

  const mockReconhecimento = {
    "id": 1,
    "from": "Beltrano",
    "to": "Ciclano",
    "message": "Excelente trabalho na entrega do projeto, sua dedicação fez toda a diferença!",
    "coins": 10
  };

  const mockRepository = {
    create: jest.fn().mockImplementation(dto => dto),
    save: jest.fn().mockResolvedValue(mockReconhecimento),
    find: jest.fn().mockResolvedValue([mockReconhecimento]),
    findOneByOrFail: jest.fn().mockResolvedValue(mockReconhecimento),
    remove: jest.fn().mockResolvedValue(mockReconhecimento),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReconhecimentoService,
        {
          provide: getRepositoryToken(Reconhecimento),
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<ReconhecimentoService>(ReconhecimentoService);
    repo = module.get<Repository<Reconhecimento>>(getRepositoryToken(Reconhecimento));
  });

  it('deve cadastrar um reconhecimento', async () => {
    const reconhecimento = {
      "id": 1,
      "from": "Beltrano",
      "to": "Ciclano",
      "message": "Excelente trabalho na entrega do projeto, sua dedicação fez toda a diferença!",
      "coins": 10
    };
    const resultado = await service.create(reconhecimento);
    expect(resultado).toEqual(mockReconhecimento);
    expect(repo.create).toHaveBeenCalledWith(reconhecimento);
    expect(repo.save).toHaveBeenCalledWith(mockReconhecimento);
  });
  
  it('deve retornar um array com todos os reconhecimentos', async () => {
    const resultado = await service.findAll();
    expect(resultado).toEqual([mockReconhecimento]);
    expect(repo.find).toHaveBeenCalled();
  });

  it('deve retornar um reconhecimento com o ID fornecido', async () => {
    const resultado = await service.findById(1);
    expect(resultado).toEqual(mockReconhecimento);
    expect(repo.findOneByOrFail).toHaveBeenCalledWith({ id: 1});
  });

  it('deve excluir um reconhecimento com o ID fornecido', async () => {
    const resultado = await service.remove(1);
    expect(resultado).toEqual(mockReconhecimento);
    expect(repo.remove).toHaveBeenCalledWith(mockReconhecimento);
  });
});
